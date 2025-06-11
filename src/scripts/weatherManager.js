import { weatherAPI } from "./apiCalls.js";

const api = new weatherAPI();

class weatherManager {
    
    async getData(location, date1, date2) {
        const data = await api.weatherCall(location, date1, date2);
        const trimmedData = api.trimData(data);
        return trimmedData
    }


}

export {weatherManager};