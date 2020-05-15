const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: lat,
            lon: lng,
            appid: 'e197c2a1734886d77127c4ef4f79bf78',
            units: 'metric'
        }
    });

    if (resp.data.cod === 200) {
        return resp.data.main.temp;

    }

}


module.exports = {
    getClima
}