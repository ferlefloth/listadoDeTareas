import fs from 'fs';
const guardarDB = ( data )=>{
    const archivo = './db/data.json'
    const dataToString= JSON.stringify(data)
    fs.writeFileSync( archivo , dataToString )
}

export { guardarDB }