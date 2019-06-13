var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

                            // DIFERENTES FORMAS DE HACER UN FOR
// for (var i = 0; i < personas.length; i++) {
//     var persona = personas[i]
//     console.log(`${persona.nombre} mide ${persona.altura}mts`)
// }

// Importante el parentesis cuando desglosas variables 
personas.forEach( ({nombre,altura}) => {
    console.log(`${nombre} mide ${altura} mts`)
});

// for(let persona of personas){
//     console.log(`${persona.nombre} mide ${persona.altura} mts`)
// }