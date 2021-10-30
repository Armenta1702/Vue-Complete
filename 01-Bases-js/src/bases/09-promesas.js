import { getHeroById } from './bases/08-imp-exp'

// console.log('Inicio')

// new Promise( ( resovel, reject ) => {
//     console.log('Cuerpo de la promesa')
//     resovel('Promesa resulta')
// }) 
// .then(console.log)
// .catch(console.log)

// console.log('Fin')


const getHeroByIdAsync = (id) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {
            const hero = getHeroById(id)

            if( hero ){
                resolve(hero)
            }else{
                reject('Heroe no existe')
            }
           
        }, 1000)
    } );
}

getHeroByIdAsync(3)
.then(h => {
    console.log(`El heroe es: ${ h.name }`)
})
.catch(console.log)