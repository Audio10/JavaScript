var edad = 27

// edad = edad + 1
edad += 1

var peso = 75

// peso = peso - 2
peso -= 2

var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

// precision con puntos decimal
var total = Math.round(precioDeVino * 100 * 3) / 100
// funcion para imprimir un valor con un determinado numero decimal en este caso .900
var totalStr = total.toFixed(3)
// convierte un string a float
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2


var cantidadDePorcionesPorPersona = pizza / personas
