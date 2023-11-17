const contadorElement = document.getElementById("contador");
const incrementarButton = document.getElementById("incrementar");
const resetearButton = document.getElementById("reiniciar");
const disminuirButton = document.getElementById("disminuir");

let contador = 0;

function disminuirContador() {
    contador--;
    contadorElement.textContent = contador;
}

function incrementarContador() {
    contador++;
    contadorElement.textContent = contador;
}

function resetearContador() {
    contador = 0;
    contadorElement.textContent = contador;
}

incrementarButton.addEventListener("click", incrementarContador);
resetearButton.addEventListener("click", resetearContador);
disminuirButton.addEventListener("click", disminuirContador)