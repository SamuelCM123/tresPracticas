const fs = require('fs');

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

    let pathFile = `./src/Ejercicio3/logs/logs_${objectDate.year}${objectDate.month}${objectDate.day}.json`;

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

module.exports = { generarLog };