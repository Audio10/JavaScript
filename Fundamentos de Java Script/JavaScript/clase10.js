var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: true,
    cantante: true,
    dj: true,
    guitarrista: true,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.dj) {
        console.log('DJ')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.guitarrista) {
        console.log('Gutiarrista')
    }

    if (persona.drone) {
        console.log('Piloto de drone')
    }

}

imprimirProfesiones(sacha)