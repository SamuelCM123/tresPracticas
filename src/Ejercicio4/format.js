/**
 * Guarda el objeto de cada factura para formatear su informacion.
 * @param {Object} bill Objeto de cada factura.
 * @returns {Array} Formatea la fecha y la importacion.
 */
const formatDateAndImport = (bill) => {
    /**
     * Guarda la fecha no formateada de cada factura.
     * @type {String}
     */
    let originalDate = bill.date;

    /**
     * Guarda la fecha preformateada.
     * @type {String}
     */
    let dateNew = new Date(originalDate);

    /**
     * Guarda el dia de la fecha preformateada con una concatenacion.
     * @type {String}
     */
    let day = (dateNew.getDate()+1).toString().padStart(2, '0');

    /**
     * Guarda el mes de la fecha preformateada con una concatenacion.
     * @type {String}
     */
    let month = (dateNew.getMonth() + 1).toString().padStart(2, '0');
    
    /**
     * Guarda el año de la fecha preformateada.
     * @type {Number}
     */
    let year = dateNew.getFullYear();

    /**
     * Guarda el total de cada factura para convertirla en float o decimal.
     * @type {Number}
     */
    let newImport = parseFloat(`${bill.total}`);

    /**
     * Guarda el formateo del total de cada factura.
     * @type {String}
     */
    let formatTotal = ` ${newImport.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

    return [formatTotal,`${day}/${month}/${year}`];
}

module.exports = {
    formatDateAndImport
}