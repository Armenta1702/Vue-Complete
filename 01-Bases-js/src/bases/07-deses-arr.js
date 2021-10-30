

const characters = ['Goku', 'Vegeta','Trunks', 'Goten']

const [g, v, t, goten = 'No tiene valor'] = characters

// console.log(goten)

const returnArray = ([letters, numbers]) => {
    return [ letters, numbers ]
}

const [ letters, numbers ] = returnArray(['XYZ', 2154])

console.log( letters, numbers)