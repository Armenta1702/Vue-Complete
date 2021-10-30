

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: '45',
    direccion: {
        Ciudad: 'NewYork'
    }
}

const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona2)
console.log(persona)