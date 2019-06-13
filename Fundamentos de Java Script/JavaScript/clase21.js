
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

// Persona.prototype.esAltura = function() {
//     if (this.altura >= 1.80) console.log(` ${this.nombre} es una persona alta.`)
//         else 
//             console.log(` ${this.nombre} es una persona baja.`)
    
// }

Persona.prototype.esAltura = function () {
    console.log(this.nombre +' '+ (this.altura >= 1.80 ? "es una persona alta" : "es una persona baja" ) )
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.90)
var erika = new Persona('Erika', 'Luna', 1.91)
var arturo = new Persona('Arturo', 'Martinez', 1.66)