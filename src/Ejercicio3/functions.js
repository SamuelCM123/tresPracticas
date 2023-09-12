const { PrintLog } = require('./printLog');


/**
 * Manda un error de prueba que lo recibe en el catch para manipularlo y pasarlo a otra funcion formateado.
 */
const logs = () => {

    // Lanza el error intencionado
    try {
        throw new Error();
        // getStatus();
        // throw 'Error perzonalizado...';
        throw 23;
    }
    catch (err) {
        // console.log('ERROR_FUNCTION: ', err.stack);

        if ( typeof err.stack !== 'string' ) PrintLog( err );
        else PrintLog( err.stack );

    }
}



module.exports ={
    // generarLog,
    logs
}