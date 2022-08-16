const imagenes = document.querySelectorAll('.tarjeta img');
const urlImagenes = [];

imagenes.forEach((imagen, index) => {
    const url = prompt('Ingrese la URL para la imagen número ' + (index + 1));
    urlImagenes.push(url);
    imagen.setAttribute('src', urlImagenes[index])
    const parent = imagenes[index].parentNode //obtener el padre de la imagen
    const enlace = document.createElement("a"); // crear el nuevo elemento padre
    parent.replaceChild(enlace, imagenes[index]) // crearle el hijo nuevo al padre de imagen
    enlace.appendChild(imagenes[index]) // Agregrarle al nuevo padre su hijo imagen 
});

const enlaces = document.querySelectorAll('.tarjeta a');
console.log(enlaces)
enlaces.forEach((enlace, index) => {
    enlace.setAttribute('href', urlImagenes[index])
});

/* ETAPA 3
    - El nodo que va cambiando cada vez es la a
    - el nodo padre que contiene a estos nodos que se repiten es el div con la clase tarjeta
*/

