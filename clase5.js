var camilo = {
    nombre: 'Camilo',
    apellido: 'Hurtado',
    edad:29
}

var ernesto = {
    nombre:'Ernesto',
    apellido:'Cataño',
    edad:26
}

function imprimiNombreEnMayusculas({nombre}) {
    console.log(nombre.toLowerCase())
}

imprimiNombreEnMayusculas(camilo)
imprimiNombreEnMayusculas(ernesto)
imprimiNombreEnMayusculas({nombre: 'Pepito'})
imprimiNombreEnMayusculas()

