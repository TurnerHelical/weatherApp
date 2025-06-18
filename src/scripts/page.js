import { Dom } from "./utils";
import { weatherManager } from "./weatherManager";

const api = new weatherManager();
const page = new Dom();


class PageAction {

    async formSubmit(e) {
        e.preventDefault();
        const form = page.findElement('#userForm');
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData.entries());
        page.toggleClass('#formCtr', 'disable');
        
        
        try{
            if (!formObj.location && !formObj.date1 && !formObj.dateRange1 && !formObj.dateRange2) {
                console.log('Please enter some info and try again');
            } else if(!formObj.location){
                console.log('A location is required.');
            } else if (formObj.location && formObj.date1 && !formObj.dateRange1 && !formObj.dateRange2) {
                const info = await api.getData(formObj.location, formObj.date1);
                this.displayData(info);

            } else if(formObj.location && !formObj.date1 && !formObj.dateRange1 && !formObj.dateRange2) {
                const info = await api.getData(formObj.location);
                this.displayData(info);
            } else {
                const info = await api.getData(formObj.location, formObj.dateRange1, formObj.dateRange2);
                this.displayData(info);
                
            }
        } catch(error) {
            console.log(error);
        }
        
        
        
                    
        
    }
    addListener() {
        const form = page.findElement('#userForm');
        form.addEventListener('submit', (e) => {
            this.formSubmit(e);
            
        });
    }

    dateChoice() {
        const ctr = page.findElement('#dateCtr');
        ctr.addEventListener('click', (e) => {
            e.preventDefault();
            const choice = e.target.id
            this.changeDateCtr(choice);
        });
    }

    changeDateCtr(choice) {
        
        if (choice === 'date') {
            page.removeElement('#dateCtr');
            page.clearContent('#dynamicDateInput');
            const singleDate = page.createAndAppend('#dynamicDateInput', 'div', 'id', 'date1Input');
            singleDate.innerHTML = `
                <label for="date1" >Search for weather on a specific day (optional):</label><br>
                <input type="date" id="date1" name="date1" />`
            
        } else if (choice === 'dateRange') {
            page.removeElement('#dateCtr');
            page.clearContent('#dynamicDateInput');
            const dateRange = page.createAndAppend('#dynamicDateInput', 'div', 'id', 'dateRangeInput');
            dateRange.innerHTML = `
                <label for="dateRange">See the weather between these dates (Seven days max):</label><br>
                <input type="date" id="dateRange1" name="dateRange1" />
                <input type="date" id="dateRange2" name="dateRange2" />
        `}
    }
    displayData(info) {
        page.clearContent('#dataCtr');
        page.createAndAppend('#dataCtr', 'div', 'id', 'cardCtr');
        
        let i = 0;
        while (i < 7) {
            i++;
            let card = page.createAndAppend('#cardCtr', 'div', 'class', 'card');
            card.innerHTML = `
          <div class="card">
          <img src="/home/hunter/repos/weatherApp/src/images/weatherIcons${info.days[i].icon}.svg" alt="" class="cardImg" />
          <div class="temps">
            <p>${info.days[i].tempmin}&deg;/ ${info.days[i].tempmax}&deg;</p>
            <p>Feels Like ${info.days[i].feelslike}&deg;</p>
          </div>
          <div class="precipProb">
            <img src="#" alt="" class="precipImg" />
            <p>${info.days[i].precipprob}%</p>
          </div>
        </div>
            `
            
        }
    }

    
    
}
export {PageAction};