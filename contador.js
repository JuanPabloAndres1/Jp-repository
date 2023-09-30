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

const mostrarChat1 = document.getElementById('mostrarChat');
const enviarMensajeBtn = document.getElementById('enviarMensaje');
const mensajeInput = document.getElementById('mensaje');
const cuerpoChat = document.querySelector('.cuerpo-chat');
const ventanaEmergente = document.getElementById('ventanaEmergente');
const cerrarVentanaBtn = document.getElementById('cerrarVentana');

let ventanaVisible = false; // Variable para controlar si la ventana está abierta o cerrada

mostrarChat1.addEventListener('click', () => {
    if (!ventanaVisible) {
        ventanaEmergente.style.display = 'block';
        ventanaVisible = true;
    } else {
        ventanaEmergente.style.display = 'none';
        ventanaVisible = false;
    }
});

function enviarMensaje() {
    const mensaje = mensajeInput.value;
    if (mensaje.trim() !== '') {
        const nuevoMensaje = document.createElement('p');
        nuevoMensaje.textContent = mensaje;
        cuerpoChat.appendChild(nuevoMensaje);
        mensajeInput.value = '';
    }
}
enviarMensajeBtn.addEventListener('click', enviarMensaje);

cerrarVentanaBtn.addEventListener('click', () => {
    ventanaEmergente.style.display = 'none';
    ventanaVisible = false;
});

