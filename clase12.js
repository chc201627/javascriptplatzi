var camilo = {
    nombre: 'Camilo',
    apellido: 'Hurtado',
    edad: 28,
    ingeniero:false,
    cocinero:false,
    cantante:true,
    dj:false,
    voleybol:true
}
var juan = {
    nombre: 'Juan',
    edad: 13
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
const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }



function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor edad`)
    }
}

const esMayorDeEdad = ({edad}) =>edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})
const permitirAcceso = (persona) =>{
    if(esMenorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }else {
        console.log('ACCESO PERMITIDO')
    }
}

// function permitirAcceso(persona){
//     if(esMenorDeEdad(persona)){
//         console.log('ACCESO DENEGADO')
//     }else {
//         console.log('ACCESO PERMITIDO')
//     }
// }
