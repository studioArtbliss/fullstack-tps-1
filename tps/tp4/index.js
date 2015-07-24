
var incrementador = 0;
var str = "";
var arrayResultado = [];
var arrayPalabras = ["tres", "uno", "cuatro"];
var otro = 0;
var arrayCuenta = [];
var letras = [];

function contarletras (str) {
	// body...

	for (var i = 0; i <= str.length; i++) {

		if (str[i] === "a" || str[i] === "A" || 
			str[i] === "e" || str[i] === "E" ||
			str[i] === "i" || str[i] === "I" ||
			str[i] === "o" || str[i] === "O" ||
			str[i] === "u" || str[i] === "U" ) {
			
			letras= str[i];
			console.log (letras);
			incrementador +=  letras.length;

		};

	};

		return incrementador;

}


arrayPalabras.forEach(function(element){

	arrayResultado.push(contarletras(element));

});

console.log (arrayResultado);
