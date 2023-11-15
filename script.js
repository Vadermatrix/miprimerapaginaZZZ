//cuadro emergente al iniciar
//alert("Hola este es mi Javascript");

// let nombre = "Maria";
// nombre = "Martin";
// var nombre1 = "Juan";

// const nombre2 = "Pedro";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

//let contenidoTitulo = "Nombrez";
//let titulo = document.querySelector(".container")

//console.log(titulo);

//titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//FUNCIONES

//let nombre1 = "Pedro";
//let ciudad1 = "Bogota";
//let gusto1 = "Ajiaco";

//let parrafo = document.querySelector(".parrafo2")

//function cambiartexto(nombre, ciudad, gusto){
  //  let contenido = `Se llama ${nombre}, vive en ${ciudad} y le gusta el ${gusto}. despues de que todo este parrafo lo consulte, lo mejores es quitar el laorem.`;

    //return contenido;
    //}

    //console.log(parrafo);
//parrafo.innerText = cambiartexto(nombre1, ciudad1, gusto1);


let clave = "cancer"

let cambioclave = document.querySelector(".clavez");

function cambiarclave(clave){
    let contenido =`${clave}`;

    return contenido;
}

cambioclave.innerText = cambiarclave(clave);