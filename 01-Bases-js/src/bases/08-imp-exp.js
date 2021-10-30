

// import {owners} from './data/heroes'

import superHero from '../data/heroes'

// getHeroById { id }
// funciones de Flecha
// find
export const getHeroById = (id) =>superHero.find( element => element.id == id)


// getHeroesByOwner 'DC', 'Marvel'
export const getHeroesByOwner = (owner) => superHero.filter(element => element.owner == owner)

