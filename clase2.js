var nombre = 'Camilo', apellido = 'Hurtado'


//convirtiendo en mayuscula

var nombreEnMayuscula = nombre.toLocaleUpperCase()
//convirtiendo a minusculas
var apellidoEnMinusculas = apellido.toLocaleLowerCase()
//obteniendo la primera letra
var primeraLetraDelNombre = nombre.charAt(0)
//cantidad de letras
var cantidadDeLetrasDelNombre = nombre.length
//nombre completo
var nombreCompleto = nombre + ' ' +apellido

//Interpolacion de testo
var nombreCompleto = `${nombre} ${apellido.toLocaleUpperCase()}`

//Acceder substring

var str = nombre.charAt(1)+ nombre.charAt(2)

var str1 = nombre.substr(1,2)

var ultimaLetraNombre = nombre.charAt(nombre.length -1)