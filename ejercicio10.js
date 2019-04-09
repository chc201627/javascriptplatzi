var camilo = {
    nombre: 'Camilo',
    apellido: 'Hurtado',
    edad: 10,
    ingeniero:false,
    cocinero:false,
    cantante:true,
    dj:false,
    voleybol:true
}

function imprimirPrfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('Dj')
    }
    if (persona.voleybol) {
        console.log('Voleyball')
    }
}

function imprimirEdad(persona){
    if (persona.edad>=18){
        console.log(`${persona.nombre} es mayor edad y tiene ${persona.edad}`)
    } else {
        console.log(`${persona.nombre} es menor edad y tiene ${persona.edad}`)
    }
}
imprimirPrfesiones(camilo)
imprimirEdad(camilo)
