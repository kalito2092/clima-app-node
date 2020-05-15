const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {
    const resp_lugar = await lugar.getLugarLatLong(direccion);
    const resp_clima = await clima.getClima(resp_lugar.lat, resp_lugar.lng);

    return `El clima de ${direccion} es de ${resp_clima}`;

}

getInfo(argv.direccion)
    .then(msj => console.log(msj))
    .catch(e => console.log(`No se pudo determinar el clima de ${argv.direccion}`))