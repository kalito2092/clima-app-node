const axios = require('axios');


const getLugarLatLong = async(direccion) => {

    const instance = axios.create({
        headers: { 'x-rapidapi-key': '7346a9593dmsh7eccaa94d443417p1810c6jsn4ec37599f70e' }

    });

    const resp = await instance.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
        params: {
            location: direccion
        }
    })

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return { address, lat, lng }
}

module.exports = {
    getLugarLatLong
}