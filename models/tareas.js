//import {v4 as uuidV4} from 'uuid'
import { Tarea } from "./tarea.js";
class Tareas{
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key]
            listado.push( tarea )
        });//return array of obj

        return listado
    }
    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray (tareas = []){
   
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
   
    }

   get listadoCompleto(){
        let allListado = this.listadoArr;
        allListado.forEach((tarea,i )=>{
            const inx = `${i + 1}.green`
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completada'.green
                                            : 'Pendiente'.red

            console.log(`${ inx } ${ desc } :: ${ estado }`)
        })

    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

export { Tareas }