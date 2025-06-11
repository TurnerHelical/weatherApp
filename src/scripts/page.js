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
        
        
        try{
            if (!formObj.location && !formObj.date1 && !formObj.dateRange1 && !formObj.dateRange2) {
                console.log('Please enter some info and try again');
            } else if(!formObj.location){
                console.log('A location is required.')
            } else if (formObj.location && formObj.date1 && !formObj.dateRange1 && !formObj.dateRange2) {
                await api.getData(formObj.location, formObj.date1);
            } else if(formObj.location && !formObj.date1 && !formObj.dateRange1 && !formObj.dateRange2) {
                const info = await api.getData(formObj.location);
                console.log(info);
            } else {
                await api.getData(formObj.location, formObj.dateRange1, formObj.dateRange2);
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
    
}
export {PageAction};