const fs = require('fs');

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
 * Manda un error de prueba que lo recibe en el catch para manipularlo y pasarlo a otra funcion formateado.
 */
const logs = () => {
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

    // Lanza el error intencionado
    try {
        throw new Error();
    }
    catch (err) {
        console.log(`[${day}/${month}/${year} ${hour}:${minutes}:${seconds} ${ampm}] Error registrado en el log`);

        registerError = {
            datetime: `${day}/${month}/${year} ${hour}:${minutes}:${seconds} ${ampm}`,
            error: err.stack
        }

        generarLog(registerError, fecha);
    }
}

/**
 * La funcion crea un archivo json dependiendo del dia en el que se presento el error e inserta el objeto en tal archivo.
 * @param {Object} registerError El objeto contiene el datetime del error y el stack del error.
 * @param {Object} objectDate El objeto contiene la fecha preformateada del año, mes y dia del error.
 */
const generarLog = (registerError, objectDate) => {
    /** 
     * Guarda el objeto convertido en una cadena string.
     * @type {String} 
     */
    let dataJSON = JSON.stringify([registerError]);

    /**
     * Guarda ruta y concatenacion del nombre del archivo.
     * @type {String} 
     */
    let pathFile = `./src/Ejercicio3/logs/logs_${objectDate.year + "" + objectDate.month + "" + objectDate.day}.json`;
    
    // Si existe el archivo .json insertar el objeto en el array de objetos
    if(fs.existsSync(pathFile)){

        /**
         * Guarda el JSON contenido en el archivo
         * @type {String} 
        */
        let content = fs.readFileSync(pathFile, 'utf8');

        /** 
         * Guarda un objeto que fue convertido de string a objeto
         * @type {Object} 
        */
        let contentObject = JSON.parse(content);

        /** 
         * Guarda un string que fue convertido de objeto a string
         * @type {String} 
        */
        let newJson = "";
        
        // Se inserta el objeto que contiene datetime y error
        contentObject.push(registerError);
        
        // Convertimos el array de objetos a string 
        newJson = JSON.stringify(contentObject);

        // Registramos nuevo contenido al JSON
        fs.writeFileSync(pathFile,newJson,'utf-8');
    }
    // Si no existe crea el archivo nuevo e inserta el objeto en un array de objetos
    else{
        fs.writeFileSync(pathFile, dataJSON, 'utf8');
    }
}

module.exports ={
    generarLog,
    logs
}