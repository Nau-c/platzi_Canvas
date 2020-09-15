//Codigo más ordenado que hatml

//Cajas que conectan con HTML.

//usando getElementById obtenemos un HTML y lo podemos guardar en una variables, y eso es un objeto, que tiene solamente esa etiqueta, en ocasiones pueden tener eventos, como evento "click", que dispara una función que pueden declarar donde quieras
var texto = document.getElementById("texto_letras");
var boton = document.getElementById("click");

//disparadoo de evento para nuestro boton, existen muchos tipos desde que estamos con el mouse encima del boton ya es un evento, se le debe apsar 2 parámetros al boton,

//No le ponemos parentesis a la función porque si no la ejecutamos en ese ismo momento, y nosostro solo queremos indicarle el nombre de la función y que se ejecute una vez que hemso realizado click
boton.addEventListener("click", dibujoPorClick);



var d = document.getElementById("Dibujando");
//Creamos una variable llamada "ancho" y le asignamos el atributo d.width
//Creamos un alert que le llamamos ancho y eso nos devuelve el tamaño del ancho del canvas
var ancho = d.width;
alert(ancho);

//Elegimos como vamos a trabajar en canvas en 2d o 3d, definimos con contexto del canvas, y lo guardamos en un lienzo o como queramso llamarlo
var lienzo = d.getContext("2d");



// Marcos de CANVAS 
dibujarLinea(color, 1, 1, 1, 299);
dibujarLinea(color, 1, 299, 299, 299,);
dibujarLinea(color, 299, 299, 299, 1);
dibujarLinea(color, 1, 299, 299, 299,);
dibujarLinea(color, 299, 1, 1, 1);
dibujarLinea(color, 1, 299, 1, 1,);
// En este bloque estamos haciendo una instruccion que recoge lo introducion
//Iniciamos el trazado, le damos un estilo,indicamos su inicio y fin luego dibujamos la linea, por último cerramos.

//Funciones que reciben parámetros, le damos nombre y decidimos cuantos vamso a pasar
function dibujarLinea(color, xi, yi, xf, yf) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

// variable texto , texto es el elemto llamado texto linea , todo el imput, en el html, para saber el verdadero valor, es con el atributo "value" ejemplo var x = texto.value. asi a cualquier variable que queramos saber si valor.


//Funciones que no reciben parámetros y se escriben en ocasioens especiales

// la forma de obtener el valor de un formulario es con value

//parseInt nos convierte de letras a un numero
function dibujoPorClick() {
  var lineas = parseInt(texto.value) ;
  var l = 0;
  var yi, xf;
  var color = "green";
  console.log(texto);
  var espacio = ancho / lineas;


  // Bucle que dibuja las línea de las 4 esquinas
  // las variables que existen dentro de unas llaves, solo existen ahí dentro de la función
  
  //Luego hacemos un ciclos while o ciclos for o do while

// ciclo for. tienes 3 parámetros en particular, separados por . y por ,
//Uno es la variable iteradora , arranca el ciclo otro la condición sobre la cual el ciclo se ejecuta y por último lo que ocurre cada vez que un ciclo es completado.

// Por último console.log que nos permite enviar mensaje de depuración, a al consola del navegador, sin que nuestro usaurios lo vean, apra que podamos ver como funciona el program pro dentro sin afectar la forma visual como funciona.

  for (l = 0; l < lineas; l++) {
    yi = l * espacio;
    yf = 300 - yi;
    xi = l * espacio;
    xf = 300 - xi;
    dibujarLinea(color, xi, 0, 300, yi);
    dibujarLinea(color, 300, yi, xf, 300);
    dibujarLinea(color, xf, 300, 0, yf);
    dibujarLinea(color, 0, yf, xi, 0);
    console.log("Linea" + 1);
  }


}
