class Libro {
  constructor(titulo, autor, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
      this.leido = false;
  }

  marcarComoLeido() {
      this.leido = true;
  }

  marcarComoNoLeido() {
      this.leido = false;
  }

  informacion() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${this.leido ? 'Sí' : 'No'}`;
  }
}

const libro1 = new Libro('El Gran Gatsby', 'F. Scott Fitzgerald', 'Novela');
const libro2 = new Libro('Cien Años de Soledad', 'Gabriel García Márquez', 'Realismo mágico');


function marcarComoLeido(numeroLibro) {
  if (numeroLibro === 1) {
      libro1.marcarComoLeido();
      document.getElementById('leido1').textContent = 'Sí';
  } else if (numeroLibro === 2) {
      libro2.marcarComoLeido();
      document.getElementById('leido2').textContent = 'Sí';
  }
}
function marcarComoNoLeido(numeroLibro) {
    if (numeroLibro === 1) {
        libro1.marcarComoNoLeido();
        document.getElementById('leido1').textContent = 'No';
    } else if (numeroLibro === 2) {
        libro2.marcarComoNoLeido();
        document.getElementById('leido2').textContent = 'No';
    }
  }

console.log(libro1.informacion());
console.log(libro2.informacion());