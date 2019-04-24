
var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
    console.log(llueve())
}while (!llueve())

if (contador===1){
    console.log(`voy a ver si llovia ${contador} vez`)
} else{
    console.log(`voy a ver si llovia ${contador} veces`)
}

console.log(!llueve())