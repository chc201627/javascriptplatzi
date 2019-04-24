var camilo = {
    nombre: 'Camilo',
    apellido: 'Hurtado',
    edad:29,
    peso:82
}


console.log(`Al inicio del año ${camilo.nombre} pesa ${camilo.peso}kg`)

const INCREMENTO_PESO=0.2
const DIAL_DEL_ANO=365
const aumentarDePeso = persona =>   persona.peso+=INCREMENTO_PESO
const adelgazarDePeso = persona =>   persona.peso-=INCREMENTO_PESO
for (var i =1;i <=DIAL_DEL_ANO;i++){
    var random = Math.random()
    if(random <0.25){
       aumentarDePeso(camilo)
    }else if (random<0.5) {
        adelgazarDePeso(camilo)
    }
}

console.log(`Al final del año ${camilo.nombre} pesa ${camilo.peso.toFixed(2)}kg`)



