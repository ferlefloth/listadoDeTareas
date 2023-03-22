//import {v4 as uuidV4} from 'uuid'
import { Tarea } from "./tarea.js";
class Tareas{
    _listado = {};

    constructor(){
        this._listado = {};
    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

export { Tareas }