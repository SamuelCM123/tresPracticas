/**
 * Determina si el numero es el indicado para realizar el proceso para conseguir su factorial.
 * @param {Number} num Numero a validar.
 * @returns {Boolean}   Returna la respuesta de la validación.
 */
const validarNumero = (num) => {
    if (num === '' || num === null || num === undefined) {
        return [false,'Ingrese un valor que no sea vacio, nulo o indefinido'];
    }

    if (typeof num !== 'number') {
        return [false,'Ingrese un valor numerico'];
    }
    
    if (!Number.isInteger(num)) {
        return [false,'Ingrese un valor que no sea decimal'];
    }

    if (num === 0) {
        return [false,'Ingrese un valor que no sea 0'];
    }

    if (num <0) {
        return [false,'Ingrese un valor que no sea negativo'];
    }

    return [true];
}

module.exports = {
    validarNumero
}