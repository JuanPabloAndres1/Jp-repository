// TIPOS DE DATOS

// String - Cadena de texto
let nombre = "Jhon"

// Entero, integer, number
let edad = 24

// Booleano
let esMayorDeEdad = true

// Flotantes
let EstaturaMetros = 1.75

// Objetos literales
let persona = {
    nombre: "Jhon",
    edad: 24,
    esMayorDeEdad: true,
    estaturaMetros: 1.75,
    tieneMascotas: true,
    tieneCasaPropia: false
}

let personaDos = {
    nombre: "Richard",
    edad: 20,
    esMayorDeEdad: true,
    estaturaMetros: 1.90,
    tieneMascotas: false,
    tieneCasaPropia: true
}
console.log(personaDos.nombre)
personaDos.nombre = "Argermira"

let personas = [persona, personaDos]
console.log(personas[1].nombre)

// Arreglos
let mascotas = ["Piña", "Zeus", "Waffle"]

// Primer elemento dentro de un arreglo
console.log(mascotas[2])

let ingredientes = ["Huevos", "Leche", "Sal"]
console.log(ingredientes[1])

let edadMascotas = [2, 9, 2]
console.log(edadMascotas[2])

// Nulo o null
// Representa algo que no existe
let valorNulo = null
console.log(valorNulo)

// Definir una variable
let nombreProfesor
// Undefined, representa que una variable no tiene 
// algun tipo de valor para nuestro código
console.log(nombreProfesor)

// Definir e inicializar una variable
let cantidadEstudiantes = 30
console.log(cantidadEstudiantes)

// Inicializar una variable
cantidadEstudiantes = 15

// Variables constantes
const PI = 3.141516

// CamelCase
// KebabCase
// SnakeCase


// Operadores Aritmeticos

let edadJhon = 28
let edadJacob = 30

let sumaEdades = edadJhon + edadJacob
console.log(sumaEdades)

let promedioEdades = sumaEdades % 5
console.log(promedioEdades)

// Operadores asignación

let numero = 1
console.log(numero)
numero += 1
console.log(numero)
numero -= 1
console.log(numero)
numero *= 10
console.log(numero)

// Operadores de comparación
// Igualdad
console.log("Jhon" == "Richard")
// Diferente
console.log("Jhon" != "Richard")
// Mayor que 
console.log(3 > 3)
// Menor que
console.log(3 < 1)

// Mayor o igual que 
console.log(3 >= 3)
// Menor o igual que
console.log(3 <= 1)

// Operadores lógicos
// Operador OR
console.log(("Jhon" == "Richard") || (1 > 0))
// Operador AND
console.log(("Jhon" == "Richard") && (1 > 0))
// Operador de NEGACION
console.log(!("Jhon" == "Richard") && (1 > 0))
console.log(!true)

// Sentencias condicionales
let edadPersona = 10
let permisoPapa = false
let permisoMama = true

if (edadPersona > 18) {
    console.log("Puede salir del país")
} else if (permisoMama && permisoPapa) {
    console.log("El niño puede salir del país")
} 


//Otro ejemplo

let tieneEntradaVip = false
let tieneEntradaGold = false
let tieneEntradaPlatinum = false

if (tieneEntradaVip) {
    console.log("Puede entrar al palco VIP")
} else if (tieneEntradaGold) {
    console.log("Puede entrar al palco gold")
} else if (tieneEntradaPlatinum) {
    console.log("Puede entrar al palco platinum")
} else {
    console.log("Ofrecerle entradas VIP")
}

console.log("Fin del código")

let listaIngredientes = [
    {
        nombre: "huevos",
        cantidad: 10
    },
    {
        nombre: "sal",
        cantidad: 0
    },
    {
        nombre: "pimienta",
        cantidad: 0
    },
    {
        nombre: "aceite",
        cantidad: 0
    },
]

for (let i = 0 ; i < listaIngredientes.length ; i++) {
    if (listaIngredientes[i].cantidad < 1) {
        console.log("Hay que comprar: " + listaIngredientes[i].nombre)
    }
}

// Funciones importantes
console.log("Imprimir algo")
window.alert("No hay café!")

// Nos permite escribir algo y almacenarno el nombreInput
let nombreInput = window.prompt("Dame tu nombre")

if (nombreInput == "Jhon") {
    window.alert("Hola! " + nombreInput)
} else {
    window.alert("No eres Jhon... :(")
}

if (nombreInput = "5") {
    window.prompt ("dame el primero ")
} 
else if (nombreInput = null){
    window.prompt ("dame el segundo ")
}

for (i = 0; numeroIngredientes != 5; ) {
    if (numeroIngredientes == 5 )
        window.alert("Es correcto, ahora...")
    else window.alert("Es 5, vuelve a intentarlo");

    else (numeroIngredientes != 5); 
        window.alert("Es 5, vuelve a intentarlo presionando F5")

        if (numeroIngredientes != 5)

// Ejercicio clase

let cantidadIngredientes= window.prompt("Dime la cantidad de Ingredientes a usar")

for(let i = 0 ; i < cantidadIngredientes ; i++){
    let nombreIngredientes= window.prompt("Nombre del Ingrediente")
    console.log(nombreIngredientes)

    window.alert("Dame numero de ingredientes")
let numeroIngredientes = window.prompt("Cuantos son?")
if (numeroIngredientes == 5) {
    window.alert("Es correcto, ahora...")
    let ingredienteUno = window.prompt("dame el primer ingrediente");
    let ingredienteDos = window.prompt("dame el segundo ingrediente");
    let ingredienteTres = window.prompt("dame el tercer ingrediente");
    let ingredienteCuatro = window.prompt("dame el cuarto ingrediente");
    let ingredienteCinco = window.prompt("dame el quinto ingrediente")
    console.log("Los ingredientes son " + ingredienteUno + " " + ingredienteDos + " " + ingredienteTres + " " + ingredienteCuatro + " " + ingredienteCinco)
}
else if (numeroIngredientes != 5) {
    window.alert("Son 5 ingredientes, vuelve a intentarlo")
}



let cantidadIngredientes= window.prompt("Dime la cantidad de Ingredientes a usar")

for(let i = 0 ; i < cantidadIngredientes ; i++){
    let nombreIngredientes= window.prompt("Nombre del Ingrediente")
    console.log(nombreIngredientes)
   
function saludar)) )