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

    borrarTarea(id = ''){
        if (this._listado[id]){
            delete this._listado[id];
        }

    }

    cargarTareasFromArray (tareas = []){
   
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
   
    }

   get listadoCompleto(){
        let allListado = this.listadoArr;
        allListado.forEach((tarea,i )=>{
            const inx = `${i + 1}`.green
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completada'.green
                                            : 'Pendiente'.red

            console.log(`${ inx } ${ desc } :: ${ estado }`)
        })

    }

     listarPendientesCompletadas( completadas = true){
        
       let contador = 0;
       this.listadoArr.forEach((tarea,i )=>{

           const { desc, completadoEn } = tarea;
           const estado = ( completadoEn ) ? 'Completada'.green
                                           : 'Pendiente'.red
            if( completadas ){
                if( completadoEn ){
                    contador += 1
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado } :: ${completadoEn .green}`)
                }
            }else{
                if( !completadoEn ){
                    contador += 1
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`)
                }
            }
       })
    }

    toggleCompletadas( ids = [] ){
        ids.forEach(id =>{
            const tarea = this._listado[id];
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString();
            }

        })

        this.listadoArr.forEach(tarea => {
            if ( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completadoEn = null
            }
        })
    }


    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

export { Tareas }