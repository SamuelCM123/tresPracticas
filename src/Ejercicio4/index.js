const { billsArray } = require('./facturas');
const { formatDateAndImport } = require('./format');
/**
 * Acumula cada total de las facturas timbradas.
 * @type {Number}
 */
let total = 0;

/**
 * Guarda los objetos de las facturas timbradas.
 * @type {Array}
 */
let objectTimbradas = [];

/**
 * Guarda los objetos de las facturas canceladas.
 * @type {Array}
 */
let objectCanceled = [];



/**
 * Esta funcion separa las facturas timbradas y las canceladas.
 * @param {Object} billsArray El array de objetos de las facturas. 
 */
const bills = (billsArray) => {
    billsArray.forEach(bill => {
        // Facturas canceladas
        if(bill.total === null){
            objectCanceled.push(bill);
        }
        // Facturas timbradas
        else{
            objectTimbradas.push(bill);
            total += bill.total;
        }
    });

    /**
     * Guarda el importe de la suma total de las facturas.
     * @type {Number}
     */
    let totalImport = parseFloat(`${total}`);

    /**
     * Formatea el importe total para que tome un formato con comas en los miles.
     * @type {String} 
     */
    let formatTotal = ` ${totalImport.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    showGoodBill(objectTimbradas,formatTotal);
    showBillCanceled(objectCanceled);
}

/**
 * Muestra las facturas timbradas formateadas con sus respectivos datos y el total del importe.
 * @param {Object} goodbill El array de objetos de las facturas timbradas.
 * @param {String} total El formateo de la suma del total de las facturas timbradas.
 */
const showGoodBill = (goodbill,total) => {
    console.log(`FACTURAS TIMBRADAS ${goodbill.length}`);
    goodbill.forEach(bill => {
        /**
         * Objeto con fecha y total importe de cada factura formateado.
         * @type {Object}
         */
        let dateNew = formatDateAndImport(bill);

        console.log(`ID: ${bill.id}`);
        console.log(`Date: ${dateNew[1]}`);  
        console.log(`Serie & Folio: ${bill.serie}-${bill.folio}`);
        console.log(`UUID: ${bill.uuid}`);
        console.log(`Total: $${dateNew[0]}`);
        console.log(`Status: FACTURADO`);
        
        
        console.log("\n");
    })
    console.log("TOTAL DE IMPORTE: "+"$"+total);
    console.log("\n");
}


/**
 * Muestra las facturas canceladas formateadas con sus respectivos datos.
 * @param {Object} badbill El array de objetos de las facturas canceladas.
 */
const showBillCanceled = (badbill) => {
    console.log(`FACTURAS CANCELADAS ${badbill.length}`);
    badbill.forEach(bill => {
        /**
         * Objeto con fecha formateada.
         * @type {Object}
         */
        let dateNew = formatDateAndImport(bill)[1];

        console.log(`ID: ${bill.id}`);
        console.log(`Date: ${dateNew}`);  
        console.log(`Serie & Folio: ${bill.serie}-${bill.folio}`);
        console.log(`UUID: ${bill.uuid}`);
        console.log(`Total: null`);
        console.log(`Status: CANCELADO`);
        
        
        console.log("\n");
    })
}

bills(billsArray);