var TEXTO = document.getElementById("texto_lineas");
var BOTON = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var D = document.getElementById("dibujito");
var ANCHO = D.width;
var LIENZO = D.getContext("2d");


// En este bloque estamos haciendo una instruccion que recoge lo introducion
//Iniciamos el trazado, le damos un estilo,indicamos su inicio y fin luego dibujamos la linea, por último cerramos.
function dibujarLinea(COLOR, Xinicial, Yinicial, Xfinal, Yfinal) {
  LIENZO.beginPath();
  LIENZO.strokeStyle = COLOR;
  LIENZO.moveTo(Xinicial, Yinicial);
  LIENZO.lineTo(Xfinal, Yfinal);
  LIENZO.stroke();
  LIENZO.closePath();
}


function dibujoPorClick() {
  var LINEAS = parseInt(texto.value);
  var L = 0;
  var YI, XF;
  var COLORCITO = "#FAA";
  var ESPACIO = ANCHO / LINEAS;

  for (l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + l);
  }

  dibujarLinea(COLORCITO, 1, 1, 1, 299);
  dibujarLinea(COLORCITO, 1, 299, 299, 299);
}