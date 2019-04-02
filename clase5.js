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

function imprimiNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreyEdad(persona){
    var{nombre,edad}= persona

    console.log('Hola me llamo '+ nombre.toUpperCase() +' y tengo '+edad+' años')
}
imprimiNombreEnMayusculas(camilo)
imprimiNombreEnMayusculas(ernesto)
imprimirNombreyEdad(camilo)
imprimirNombreyEdad(ernesto)
