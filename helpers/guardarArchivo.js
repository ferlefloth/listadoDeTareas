import fs from 'fs';
import { arch } from 'os';
const archivo = './db/data.json'

const guardarDB = ( data )=>{
    const dataToString= JSON.stringify(data)
    fs.writeFileSync( archivo , dataToString )
}

const leerDB = async ()=>{
    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}

export { guardarDB,leerDB }