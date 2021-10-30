

const nombre = 'Fernando'
const apellido = 'Armenta'

const nombreCompleto = `${nombre} ${apellido}`

// console.log(nombreCompleto) 

function getSaludo(){
    return 'Hola '+ nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)