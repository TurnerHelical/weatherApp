import { Dom } from "./utils";

const page = new Dom();

class PageAction {

    formSubmit(e) {
        e.preventDefault();
        const location = page.findElement('#location');
        const date1 = page.findElement('#date1')
        const dateRange1 = page.findElement('#dateRange1');
        const dateRange2 = page.findElement('#dateRange2');
        if (location.value && !date1 && !dateRange1 && !dateRange2) {
            
        }
        
        
        
        else (location.value == '' && date1.value == '' && dateRange1.value == '' && dateRange2.value == '' ) {
            console.log('Please enter some information')
        }
    }
    
}