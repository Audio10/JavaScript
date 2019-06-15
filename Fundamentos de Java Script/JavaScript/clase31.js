//Para que salgan ordenadas las peticiones se utiliza una funcion callback

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
    .get(url, opts,callback)
    .fail(() => {
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
    })
}

//El asincronismo se ejecuta asi para pedir peticiones en orden
obtenerPersonaje(1,  (personaje) =>{
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, (personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)
                        })
                    })
                })
            })
        })
    })
})