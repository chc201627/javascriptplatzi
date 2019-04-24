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

var personas = [camilo,felipe,jonathan,betsabet]

for (var i = 0; i<personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.estatura}mts`)
}