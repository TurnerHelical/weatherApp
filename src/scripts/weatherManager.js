import { weatherAPI } from "./apiCalls.js";

const api = new weatherAPI();

class weatherManager {
    
    async getData(location) {
        const data = await api.weatherCall(location);
        const trimmedData = api.trimData(data);
        return trimmedData
    }

    
}

export {weatherManager};