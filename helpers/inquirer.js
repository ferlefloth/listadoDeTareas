import inquirer from 'inquirer';
import colors from 'colors';
import { validate } from 'uuid';

const preguntas = [
    {
        type:"list",
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices :[
            {
                value: '1',
                name: `${"1. ".green} Crear tarea`.green
            },
            {
                value: '2',
                name: `${"2. ".green} Listar tareas`
            },
            {
                value: '3',
                name: `${"3. ".green} Listar tareas completadas`//'3. Listar tareas completadas'
            },
            {
                value: '4',
                name: `${"4. ".green} Listar tareas pendientes`//'4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: `${"5. ".green} Completar tarea(s)`//'5. Completar tarea(s)'
            },
            {
                value: '6',
                name: `${"6. ".green} Borrar tarea`//'6. Borrar tarea'
            },
            {
                value: '0',
                name: `${"0. ".green} Salir`//'0. Salir'
            },
        ]
    }
]

const inquirerMenu = async () => {

    console.log('=============='.green);
    console.log(' Seleccione una opción'.green);
    console.log('=============='.green);
    
    const { opcion } = await inquirer.prompt(preguntas)
    return opcion;
}

const pausaInquirer = async ()=>{
    const question = {
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.green} para continuar`
    }
    await inquirer.prompt(question)

}

const leerInput = async( message ) =>{

    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate( value ){
            if (value.length ===0){
                return 'Por favor, ingrese un valor';
            }
            return true;
        }
    }
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async ( tareas = [])=>{

    const choices = tareas.map( (tarea,i)  =>{
            const idx = `${i + 1}`;
        
            return{
                value: tarea.id,
                name: `${ idx } ${tarea.desc}` 
            }
    })

    choices.unshift({
        value: '0',
        name: '0'.green + ' Cancelar'
    })

    const preguntas =[
        {
            type: 'list',
            name :'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas)
    return id
}
const mostrarListadoChecklist = async ( tareas = [])=>{

    const choices = tareas.map( (tarea,i)  =>{
            const idx = `${i + 1}`;
        
            return{
                value: tarea.id,
                name: `${ idx } ${tarea.desc}`,
                checked: ( tarea.completadoEn ) ? true : false
            }
    })


    const pregunta =[
        {
            type: 'checkbox',
            name :'ids',
            message: 'Seleccione',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta)
    return ids
}

const confirmar = async ( message ) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message: message
    }]

    const { ok } = await inquirer.prompt(question);
    return ok;
}


export {
    inquirerMenu,
    pausaInquirer,
    listadoTareasBorrar,
    leerInput,
    confirmar,
    mostrarListadoChecklist
}