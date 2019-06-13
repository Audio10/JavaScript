var nombre ='sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

//Interpolacion dentro de `` puedes escribir las variables e insertar codigo js
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1,2)

var ultimaLetra = nombre.charAt(nombre.length-1)