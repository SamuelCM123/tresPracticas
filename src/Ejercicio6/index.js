const {validarNumero} = require('./validate')

/**
 * Almacena numero entero al cual se le determinara su factorial.
 * @type {Number}
 */
let numero = 5;
console.log("NUMERO:",numero);
/**
 * Acumula las diferentes multiplicaciones para determinar el factorial
 * @type {Number}
 */
let suma = 0;

/**
 * Guarda un numero como metodo de bandera que sirve para determinar el ciclo en donde se encuentra corriendo
 * @type {Number}
 */
let bandera = 0;

/**
 * Determina el factoria de un numero.
*/
const factorial = () => {
    /**
     * El array guarda una respuesta de la validacion y un valor boolean en caso de haber un error, sino solo manda un true
     * @type {Array}
     */
    let validacion = validarNumero(numero);
    if (validacion[0]) {
        for (let i = numero; i > 1; i--) {
            if (bandera <= 0) {
                suma = i;
            }
            else {
                suma *= i;
            }
            console.log(suma);
            bandera++;
        }
        console.log("Factorial",suma);
    }
    else {
        console.log(validacion[1]);
    }
    // }
}

/**
 * Determina si el numero es el indicado para realizar el proceso para conseguir su factorial.
 * @param {Number} num Numero a validar.
 * @returns {Boolean}
 */

factorial()