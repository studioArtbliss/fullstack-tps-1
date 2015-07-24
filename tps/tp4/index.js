//declaracion de variables
var incrementador = 0;
var str = "";
var arrayResultado = [];
var arrayPalabras = ["tres", "uno", "cuatro"];
var otro = 0;
var arrayCuenta = [];
var letras = [];

//funcion de determinar cuales son las vocales de cada palabra
function contarletras (str) {
	
	//iteramos por cada palabra 
	for (var i = 0; i <= str.length; i++) {
		//Se detecta cuales son vocales ya sean mayusculas o minusculas
		if (str[i] === "a" || str[i] === "A" || 
			str[i] === "e" || str[i] === "E" ||
			str[i] === "i" || str[i] === "I" ||
			str[i] === "o" || str[i] === "O" ||
			str[i] === "u" || str[i] === "U" ) {

			letras= str[i];
			//console.log (letras);
			incrementador +=  letras.length;

		};

	};
		//se devuelve el valor de cantidad de vocales por palabra
		return incrementador;

}

//se itera para generar el array de resultados
arrayPalabras.forEach(function(element){

	arrayResultado.push(contarletras(element));

});

// En este momento falla el array porque suma la cantidad de vocales
//el primer resultado es correcto pero luego suma en lugar de agregarlas
console.log (arrayResultado);
