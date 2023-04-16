import colors from 'colors';
import {
    mostrarMenu,
    pausa
} from './helpers/mensajes.js';
import {
    inquirerMenu,
    pausaInquirer,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} from './helpers/inquirer.js';
import {
    Tarea
} from './models/tarea.js';
import {
    Tareas
} from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';

const main = async () => {

    
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = await leerDB();
    if( tareasDB ){
        tareas.cargarTareasFromArray(tareasDB)
    }
    do {
        opt = await inquirerMenu(opt);

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)

                break;
            case '2':
                console.log(tareas.listadoCompleto);
                break;
            case '3':
                console.log(tareas.listarPendientesCompletadas(true));
                break;
            case '4':
                console.log(tareas.listarPendientesCompletadas(false))
                break;
            case '5':
                const ids = await mostrarListadoChecklist( tareas.listadoArr )
                console.log(ids)
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr)
                if( id !== '0'){
                const ok = await confirmar('¿Estás seguro de querer borrarlo?');
                if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada')
                }
            }
                break;
        }
        
        guardarDB( tareas.listadoArr );

        await pausaInquirer();
    } while (opt !== '0')
    
}

main()
    .then()
    .catch(e => console.log('el error: ' + e));