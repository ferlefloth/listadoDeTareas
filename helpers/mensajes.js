import resolve  from 'path';

import colors from 'colors';

const mostrarMenu = async () => {

    return new Promise( resolve => {

        console.clear();
        console.log('=========================');
        console.log(' Seleccionar una opcion');
        console.log('=========================');

        console.log(`${'1'.green} Crear tarea`);
        console.log(`${"2".green} Listar tareas`);
        console.log(`${"3".green} Listar tareas completadas`);
        console.log(`${"4".green} Lista tareas pendientes`);
        console.log(`${"5".green} Completar tarea(s)`);
        console.log(`${"6".green} Borrar tarea`);
        console.log(`${"0".green} Salir \n`);

        //el readline es una librería de node para poder mostrar el ida y vuelva con el usario por comando
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    })
}

const pausa = async () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${'ENTER' .blue} para continuar\n`, (opt) => {
            readline.close();
            resolve(opt);
        })
    })
    
}

export {
    mostrarMenu,
    pausa
}