class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        // Cualquier null es false, cualquier 0 o null son falso
        // cualquier objeto aunque este ,array es true
        // Un string vacio es false
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabia que eras desarrolador`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

sacha.saludar()

// Estas entidades llaman a responder saludo el cual toma los atributos dentro cuando
// confirmas que enviaste la funcion como parametro toma sus valores dentro del saludar.
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)