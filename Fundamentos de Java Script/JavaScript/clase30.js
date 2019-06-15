//Para que salgan ordenadas las peticiones se utiliza una funcion callback

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)
    

    if (callback) {
        callback()
    }

    })
}

//El asincronismo se ejecuta asi para pedir peticiones en orden
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})




