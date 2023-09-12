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
        if (bill.total === null) {
            objectCanceled.push(bill);
        }
        // Facturas timbradas
        else {
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
    goodBill(objectTimbradas, formatTotal);
    canceledBill(objectCanceled);
}

/**
 * Muestra las facturas timbradas formateadas con sus respectivos datos y el total del importe.
 * @param {Object} goodbill El array de objetos de las facturas timbradas.
 * @param {String} total El formateo de la suma del total de las facturas timbradas.
 */
const goodBill = (goodbill, total) => {
    console.log(`FACTURAS TIMBRADAS: ${goodbill.length}`);
    goodbill.forEach(bill => {
        showBills(bill, "Timbrada")
    })
    console.log("TOTAL DE IMPORTE: " + "$" + total);
    console.log("\n");
}

/**
 * Muestra las facturas canceladas formateadas con sus respectivos datos.
 * @param {Object} badbill El array de objetos de las facturas canceladas.
 */
const canceledBill = (badbill) => {
    console.log(`FACTURAS CANCELADAS: ${badbill.length}`);
    badbill.forEach(bill => {
        showBills(bill, "Cancelada")
    })
}

/**
 * 
 * @param {Object} bill Factura individual para formatear
 * @param {String} typeBill Guarda el tipo de factura que es para filtrarlo cuando se muestre
 */
const showBills = (bill, typeBill) => {
    /**
    * Objeto con fecha y total importe de cada factura formateado.
    * @type {Object}
    */
    let dateNew = typeBill === 'Timbrada' ? formatDateAndImport(bill) : formatDateAndImport(bill)[1]

    console.log(`ID: ${bill.id}`);
    console.log(`Date: ${typeBill === 'Timbrada' ? dateNew[1] : dateNew}`);
    console.log(`Serie & Folio: ${bill.serie}-${bill.folio}`);
    console.log(`UUID: ${bill.uuid}`);
    console.log(`Total: ${typeBill === 'Timbrada' ? '$' + dateNew[0] : 'null'}`);
    console.log(`Status: ${typeBill === 'Timbrada' ? 'FACTURADO' : 'CANCELADO'}`);

    console.log("\n");
}

bills(billsArray);