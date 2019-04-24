/*Declaración de objetos
=========================================*/

//estoy creando personas
var  camilo = {
    nombre: "Camilo",
    apellido: "Hurtado",
    estatura: 1.80,
    ubicacion: "Colombia"
}

var felipe = {
    nombre: "Felipe",
    apellido: "Hurtado",
    estatura: 1.78,
    ubicacion: "Colombia"
}

var jonathan = {
    nombre: "Jonathan",
    apellido: "Páez",
    estatura: 1.70,
    ubicacion: "venezuela"
}

var betsabet = {
    nombre: "Betsabet",
    apellido: "Soto",
    estatura: 1.64,
    ubicacion: "chile"
}

const esAlta = ({estatura}) => estatura >= 1.75
const esBaja = ({estatura}) => estatura < 1.75
var personas = [camilo,felipe,jonathan,betsabet]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
console.log(personasAltas)
console.log(personasBajas)