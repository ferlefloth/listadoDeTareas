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
                name: '1. Crear tarea'.green
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
]

const inquirerMenu = async () => {

    console.log('=============='.green);
    console.log(' Seleccione una opción'.green);
    console.log('=============='.green);
    
    const { opcion } = await inquirer.prompt(preguntas)
    console.log('la opcion en el inquMenu: ' + opcion)
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

export {
    inquirerMenu,
    pausaInquirer,
    leerInput
}