class weatherAPI {

    //Call the API and return the response, include a location, and optionally a date1 and date2
    async weatherCall(location, date1, date2) {
        try {
            if (!date1 && !date2) {
                const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8R9F9CZ8KCSN2SRRVVYA2NF49&include=alerts`);
                const weatherData = await response.json();        
                return weatherData
            }
            else if (date1 && !date2) {
                const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}?key=8R9F9CZ8KCSN2SRRVVYA2NF49`)
                const weatherDataByDate = await response.json();
                
                return weatherDataByDate;
            } else if (date1 && date2) {
                const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=8R9F9CZ8KCSN2SRRVVYA2NF49`)
                const weatherDataByDateRange = await response.json();
                return weatherDataByDateRange;
            }
            

        } catch (error) {
            console.log(error);
        }
        };
    

    trimData(weatherData) {

        const neededAttributes = {}
        neededAttributes.address = weatherData.address;
        neededAttributes.days = weatherData.days;
        neededAttributes.alerts = weatherData.alerts;
        return neededAttributes

    }
    }
    export {weatherAPI};