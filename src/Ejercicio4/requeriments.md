# **Ejercicio 04: Importe de Facturas**

En el desarrollo de software, es un muy común vernos en la necesidad de tener que aplicar ciertos filtros en la manipulación de arreglos u objetos para poder conseguir un resultado determinado.

En esta práctica, tendremos unos registros de facturas en el cual vendrá el campo `total` y debemos sumar todos los totales de las facturas, para conocer el importe total de la agrupación de facturas.

## **Requerimientos**

A continuación se enlistarán los requerimientos de esta práctica:

- ✨ Los valores de entrada serán los siguientes:

    ```js
    [
        {
            id: '0b060d19-98e5-41f0-9519-0cee41af9055',
            date: '2023-01-11T00:00:00.000Z',
            serie: 'CRE',
            folio: '1000',
            uuid: '22e84310-a2bb-48e6-b420-673ddec29b18',
            total: 1305.24,
            status: true,
        },
        {
            id: '4495af12-8905-4004-aa1f-0c5c748eb2dd',
            date: '2023-01-23T00:00:00.000Z',
            serie: 'CRE',
            folio: '1001',
            uuid: '4a751c60-14af-462e-84c0-35b1026a5554',
            total: 450.00,
            status: true,
        },
        {
            id: 'a903d1b8-7e66-4e78-92bd-4863289eeca0',
            date: '2023-02-03T00:00:00.000Z',
            serie: 'CRE',
            folio: '1002',
            uuid: '',
            total: null,
            status: false,
        },
        {
            id: '6f013685-dce6-4321-9353-b9f79f1c01a7',
            date: '2023-03-13T00:00:00.000Z',
            serie: 'AVA',
            folio: '3000',
            uuid: '1ea38bd4-da37-4380-9f3d-9416203e3f99',
            total: 2999.12,
            status: true,
        },
        {
            id: '605e5d90-1d79-428f-9bf5-895bed93bda6',
            date: '2023-04-18T00:00:00.000Z',
            serie: 'LEP',
            folio: '2000',
            uuid: 'c8858f23-cff6-4e99-9f1d-4f0900ac38c8',
            total: 10000.40,
            status: true,
        },
        {
            id: '1062796d-0471-4eb7-9c04-b3c4dc77d252',
            date: '2023-05-24T00:00:00.000Z',
            serie: 'LEP',
            folio: '2001',
            uuid: '',
            total: null,
            status: false,
        },
        {
            id: 'c16fddbf-f91c-4d68-b6d7-8fe987662be5',
            date: '2023-06-26T00:00:00.000Z',
            serie: 'PRE',
            folio: '100',
            uuid: '56ec252b-552e-4b66-831a-67841e12126f',
            total: 750.26,
            status: true,
        },
        {
            id: '5118260b-11b9-4d0f-801d-6815c2e6d3a0',
            date: '2023-07-21T00:00:00.000Z',
            serie: 'ZEL',
            folio: '10',
            uuid: 'a1a82903-41c0-4598-9085-3df90c5c0bb1',
            total: 200.00,
            status: true,
        },
        {
            id: 'a1a82903-41c0-4598-9085-3df90c5c0bb1',
            date: '2023-08-01T00:00:00.000Z',
            serie: 'ZEL',
            folio: '11',
            uuid: '7f9bb287-e3f3-481a-86dc-f7513ee02008',
            total: 899.99,
            status: true,
        },
        {
            id: '14de31cb-7955-4005-b788-e7a303d182e8',
            date: '2023-08-04T00:00:00.000Z',
            serie: 'CER',
            folio: '1500',
            uuid: '',
            total: null,
            status: false,
        }
    ]
    ```

- ✨ Sumar todos los `total` e imprimirlo por consola al final.

- ✨ Calcular cuantas facturas fueron timbradas y mostrar cuales son:

    ```js
    // FACTURAS TIMBRADAS: 7
    //
    // ID: 0b060d19-98e5-41f0-9519-0cee41af9055
    // Date: 11/01/2023
    // Serie & Folio: CRE-1000
    // UUID: 22e84310-a2bb-48e6-b420-673ddec29b18
    // Total: $ 1,305.24
    // Status: FACTURADO
    // ---------    
    // ID: 4495af12-8905-4004-aa1f-0c5c748eb2dd
    // Date: 23/01/2023
    // Serie & Folio: CRE-1001
    // UUID: 4a751c60-14af-462e-84c0-35b1026a5554
    // Total: $ 450.00
    // Status: FACTURADO
    // ...
    // ...
    // ...
    //
    // TOTAL DE IMPORTE: $ 100,000.00
    ```

    En el ejemplo anterior, notese que:
    
    - En **Date** se formatea la fecha a `DD-MM-YYYY`.
    - La **Serie** y el **Folio** se concatenan.
    - En **Total** y en el **importe**, se formatea el valor colocandole un signo `$`, coloca una coma en los miles y se colocan dos dígitos después del punto decimal.
    - **Status** formatea el estado de la factura, `true` es **FACTURADO** y `false` es **CANCELADO**.

- ✨ Calcular cuantas facturas fueron canceladas y mostrar cuales son:

    ```js
    // FACTURAS CANCELADAS: 3
    //
    // ID: 0b060d19-98e5-41f0-9519-0cee41af9055
    // Date: 11/01/2023
    // Serie & Folio: CRE-1000
    // UUID: 
    // Total: null
    // Status: CANCELADO
    // ---------    
    // ID: 4495af12-8905-4004-aa1f-0c5c748eb2dd
    // Date: 23/01/2023
    // Serie & Folio: CRE-1001
    // UUID: 
    // Total: null
    // Status: CANCELADO
    // ...
    // ...
    // ...
    //
    ```

    En el ejemplo anterior, notese que:
    
    - En **Date** se formatea la fecha a `DD-MM-YYYY`.
    - La **Serie** y el **Folio** se concatenan.
    - En **Total**, si no hay valor, se coloca como nulo .
    - **Status** formatea el estado de la factura, `true` es **FACTURADO** y `false` es **CANCELADO**.

- ✨ Documentar el código de la práctica con **[JS Docs](https://jsdoc.app/)**.

## **Reglas**

No hay reglas a considerar.

## **Script de Ejecución**

Diríjase al `package.json` y elabore un script de ejecución llamado `amount-bills` que ejecute la práctica con la paquetería Nodemon.

¡Mucho éxito! 🙌🏻✨ 