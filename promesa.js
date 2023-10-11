// const regalarUnCarrito = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Regale el carrito");
//     }, 1000);
// });

// const ganarMundial = new Promise(function (resolve, reject) {
//     let ganeLaFinal = false
//     setTimeout(function () {
//         if (ganeLaFinal) {
//             resolve("Gane el mundial")
//         } else {
//             reject("Perdi el mundial")
//         }
//         // reject("Perdi el mundial")
//     }, 3000)
// })

// ganarMundial.then(function (info) {
//     console.log(info + "se ejecuto el then")
// }).catch(function (error) {
//     console.log(error + "se ejecuto el catch")
// })

// console.log("ME EJECUTE SIN ESPERA")
// setInterval(function () {
//     console.log("ME EJECUTO CADA SEGUNDO")
// }, 1000)

// console.log("holaaaaaa")

// setTimeout(soyUnaFuncion, 2000)



// function soyUnaFuncion(nombre) {
//     console.log("Soy una funcion normal" + nombre)
// }

// const soyUnaFuncionFecha = (nombre) => {
//     console.log("Soy una funcion fecha" + nombre)
// }

// soyUnaFuncion("hola")
// soyUnaFuncionFecha("adios")

// myPromise
//     .then((res) => {
//         console.log(res)
//     })



// async function oneRick() {
//     const response = await fetch("https://rickandmortyapi.com/api/character/2");
//     const rick = await response.json();
//     console.log(rick);
// }

// async function rick() {
//     const rick = await fetch("https://rickandmortyapi.com/api/character")
//         .then(response => response.json()
//             .then(data => console.log(data)))
// }

// oneRick()
// rick()

const myDiv = document.getElementById("miP")
function traerARick() {
    const rick = fetch("https://rickandmortyapi.com/api/character/134")
    rick.then(response => response.json()
        .then(info => {
            miP.innerHTML = `<p>El nombre de este personaje es ${info.name} y su estado es ${info.status} img <img src=${info.image}></img> </p> `

        })
        .catch(error => console.log(error)))
        .catch(error => console.log(error))
}

traerARick()

// const json = {
//     clave: valor,
//     nombre:"carlos"
// }