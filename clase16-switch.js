var signo = prompt('¿Cual es tu signo?')

switch (signo){
    case   'acuario':
        console.log('No dude en agasajar a los que aprecia cuando lo sienta. Recuerde que su hospitalidad lo convierte siempre en un gran anfitrión en su entorno.')
        break
    case 'picis':
        console.log('No dude en agasajar a los que aprecia cuando lo sienta. Recuerde que su hospitalidad lo convierte siempre en un gran anfitrión en su entorno.')
        break
    case 'cancer':
    case 'Cancer':
        console.log('Gracias a la presencia lunar, podrá terminar todo lo que se propuso, Sepa que toda su energía vital se desplegará en todas las actividades que tenga.')
        break
    default:
        console.log('No es un signo zodiacal valido')
        break
}

