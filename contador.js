const contadorElement = document.getElementById("contador");
const incrementarButton = document.getElementById("incrementar");
const resetearButton = document.getElementById("resetear");
const disminuirButton = document.getElementById("disminuir");
let contador = 0;
function incrementarContador() {
    contador++;
    contadorElement.textContent = contador;
}
function resetearContador() {
    contador = 0;
    contadorElement.textContent = contador;
}
function disminuirContador() {
    contador--;
    contadorElement.textContent = contador;
}
incrementarButton.addEventListener("click", incrementarContador);
resetearButton.addEventListener("click", resetearContador);
disminuirButton.addEventListener("click", disminuirContador);

document.getElementById("miBoton").addEventListener("click", function() {
    alert ("Llamanos al 31111111");
     });