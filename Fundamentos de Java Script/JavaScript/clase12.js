var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
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

//Las constantes se separan por _ entre espacios en blanco
const MAYORIA_DE_EDAD = 18

//  FUNCION ANONIMA
// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// ES UNA FUNCION Y NO UNA VARIABLE POR ESO SE PONE CONST
// SI SOLO SE RETORNA UNA COSA SE PUEDE APLICAR EL CALL BACK SIN LLAVES 
// DESDE MI PUNTO DE VISTA AL HACER ASIGNACION LLAMA IMPLICITAMENTE A UN RETURN
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

const esMenorDeEdad = (persona) => !esMayorDeEdad(persona)

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}