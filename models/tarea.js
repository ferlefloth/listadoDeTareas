//utilizamos clases en js.
import {v4 as uuidV4} from 'uuid';

class Tarea{
    id = '';
    desc = '';
    completadoEn = null;
    
    constructor( desc ){
        this.id = uuidV4();
        this.desc = desc;
        this.completadoEn = null;
    }
    
}

export{
    Tarea
}