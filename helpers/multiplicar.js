 const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors')
 
 const crearArchivo = async ( base , listar, hasta = 10) => {
    try{
       
    
        let salida =``;

        
          for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${(base * i)}\n`;
        }
        
    
    
        if (listar) {
          console.log(`==================`)
          console.log(` Tabla del: ${base}`.underline)
          console.log(`==================`)
          console.log(salida.zebra);
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${ base } .txt`
    }
      catch(err) {
        throw err;
      }  

 }



module.exports = {
    crearArchivo
}

