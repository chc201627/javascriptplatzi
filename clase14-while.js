var camilo = {
    n:'Camilo',
    a:'Hurtado',
    e:29,
    p:82
}

const DIAS_ANO = 365
const INCREMENTO_PESO=0.3

const aumentarPeso = persona => persona.p += INCREMENTO_PESO
const disminuirPeso = persona => persona.p -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realzaDeporte = () => Math.random() <0.4
var dias = 0
const META = camilo.p -3

while (camilo.p > META){

    if (comeMucho()){
            aumentarPeso(camilo)
    }
    if (realzaDeporte()) {
        disminuirPeso(camilo)
    }
    dias += 1

}

console.log(`Pasaron ${dias} días hasta que ${camilo.n} bajo ${camilo.p.toFixed(0)}kg`)