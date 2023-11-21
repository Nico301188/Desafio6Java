
console.log(document.title) 

document.addEventListener("DOMContentLoaded", function algo() {
    // Obtener todos los elementos dl en la página
    const elementosDl = document.querySelectorAll('dl');

    // Iniciar la cadena de salida
    let salida = "-----\n";

    // Iterar sobre cada elemento dl
    elementosDl.forEach((dl, indice) => {
        // Obtener los datos de cada dt y dd
        const primerNombre = dl.querySelector('dt:nth-child(1) + dd').textContent || '';
        const segundoNombre = dl.querySelector('dt:nth-child(3) + dd').textContent || '';
        const primerApellido = dl.querySelector('dt:nth-child(5) + dd').textContent || '';
        const segundoApellido = dl.querySelector('dt:nth-child(7) + dd').textContent || '';

        // Formatear el nombre completo
        const nombreCompleto = [primerNombre, segundoNombre, primerApellido, segundoApellido].filter(Boolean).join(" ");

        // Agregar a la cadena de salida
        salida += `Integrante ${indice + 1}: "${nombreCompleto}"\n`;
    });

    // Imprimir en la consola
    console.log(salida + "-----");
});

console.log(algo)
const lista = document.getElementById("lista");
const integrantes = document.addEventListener("DOMContentLoaded")

console.log(lista)