const { generarLog } = require('./generateLog');

const PrintLog = ( errorReceived ) => {

    /**
     * Guarda la fecha del dia de hoy.
     * @type {Object}
     */
    let dateTime = new Date();


    /**
     * Guarda el dia formateado para que salgan 2 caracteres.
     * @type {String}
     */
    let day = dateTime.getDate().toString().padStart(2, '0');

    /**
     * Guarda el mes formateado para que salgan 2 caracteres.
     * @type {String}
     */
    let month = (dateTime.getMonth() + 1).toString().padStart(2, '0');

    /**
     * Guarda el mes.
     * @type {Number}
     */
    let year = dateTime.getFullYear();

    /**
     * Guarda la hora.
     * @type {Number}
     */
    let hour = dateTime.getHours();

    /**
     * Guarda los minutos formateados para que salgan 2 caracteres.
     * @type {String}
     */
    let minutes = dateTime.getMinutes().toString().padStart(2, '0');

    /**
     * Guarda los segundos formateados para que salgan 2 caracteres.
     * @type {String}
     */
    let seconds = dateTime.getSeconds().toString().padStart(2, '0');

    /**
     * Guarda AM o PM dependiendo del valor de la variable "hour"
     * @type {String}
     */
    let ampm = hour >= 12 ? 'PM' : 'AM';

    /**
     * El objeto guarda el datetime y el error generado.
     * @type {Object}
     */
    let registerError;

    /**
     * Guarda en las propiedades year,month,day de las respectiva fecha.
     * @type {object}
     */
    let fecha = {
        year: year,
        month: month,
        day: day
    }

    // Convertir la hora al formato de 12 horas
    hour = hour % 12;
    hour = hour > 0 ? hour : 12; // Si la hora es 0, establecerla en 12

    console.log(`[${day}/${month}/${year} ${hour}:${minutes}:${seconds} ${ampm}] Error registrado en el log`);

    registerError = {
        datetime: `${day}/${month}/${year} ${hour}:${minutes}:${seconds} ${ampm}`,
        error: errorReceived
    }

    generarLog(registerError, fecha);

}

module.exports = { PrintLog };