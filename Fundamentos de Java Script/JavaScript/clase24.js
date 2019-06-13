// PARA HEREDAR NECESITAS CREAR UNA FUNCION PROPIA
function heredaDe(prototipoHijo, prototipoPadre) {
    // DENTRO DE ESTA DECLARAS UNA FUNCION ANONIMA TEMPORAR
    var fn = function () { }
    // ASIGNAS A ESTA EL PROTOTIPO PADRE
    fn.prototype = prototipoPadre.prototype
    // AL PROTORIPO HIJO LE ASIGNAS QUE ES UNA NUEVA INSTANCIA DEL PROTOTIPO PADRE
    prototipoHijo.prototype = new fn
    // Y AL FINAL AGREGAR A ESTE PROTOTIPO EL CONSTRUCTOR DE LA CLASE HIJA SINO VA A OCUPAR EL DEL PADRE
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)