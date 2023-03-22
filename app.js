import colors from 'colors';
import {
    mostrarMenu,
    pausa
} from './helpers/mensajes.js';
import {
    inquirerMenu,
    pausaInquirer,
    leerInput
} from './helpers/inquirer.js';
import {
    Tarea
} from './models/tarea.js';
import {
    Tareas
} from './models/tareas.js';

const main = async () => {
    console.log("hello world");
    const tareas = new Tareas();
    let opt = '';
    do {
        opt = await inquirerMenu(opt);

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)

                break;
            case '2':
                console.log(tareas._listado);
                break;
        }


        await pausaInquirer();
    } while (opt !== '0')
}

main()
    .then()
    .catch(e => console.log('el error: ' + JSON.stringify(e)))