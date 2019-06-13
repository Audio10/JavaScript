var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    //DECLARAS LA VARIABLES NOMBRE COMO UNA PARTE DE LA ESTRUCTURA DEL OBJETO Y LA CONSERVAS
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreYEdad(sacha)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad(persona) {
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad}`)
    // Hola, me llamo Sacha y tengo 28 años
    // Hola, me llamo Darío y tengo 27 años
}
