//Primer parte del TP 3 Invertir orden del String

// Se crean y cargan las variables 
var cadena = "Cadena de texto";
var tamanoCadena = cadena.length;
var cadenaInvertida = "";

//se ejecuta el while usando como parametro el tamaño de la cadena y mediante el metodo charAt se selecciona caracter por caracter
while (tamanoCadena>=0) {
	cadenaInvertida = cadenaInvertida + cadena.charAt(tamanoCadena);
	tamanoCadena--;
}
//
console.log("Strng Original: " + cadena);
console.log("String Resultado: " + cadenaInvertida);

//Segunda parte del TP 3 Invertir orden del Array sin utilizar "reverse"

// Definimos variables cargando el array de ejemplo.
var nuevoArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//se convierte el array en string
var arrayAString = nuevoArray.join();
var tamañoArrayAString = arrayAString.length;
var stringInvertido = "";
var nuevoArrayInvertido = [];

//se ejecuta el while usando como parametro el tamaño de la cadena y mediante el metodo charAt se invierte caracter por caracter
while (tamañoArrayAString>=0) {
	stringInvertido = stringInvertido + arrayAString.charAt(tamañoArrayAString);
	tamañoArrayAString--;
}
//se vuelve a convertir el string a array
nuevoArrayInvertido = stringInvertido.split(",");
console.log("Array Original: "+ nuevoArray);
console.log("Array Invertido: "+ nuevoArrayInvertido);