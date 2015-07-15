

var delimitador = ", ";

var resultado = "";
/*
for (i = 0; i <= 10; i++) {
	var nombre = prompt("ingresa tu nombre sos el " +i, "Matias");
	
	if (i === 0) {
		resultado += nombre;
	}else{
		resultado += delimitador + nombre;
	}
}
console.log (resultado);
*/

//asignando cantidad de nombres desde el arranque

var muestras = prompt("ingresa cantidad de ejecuciones", 10);

cantidadMostrar = 0;

while (cantidadMostrar < muestras){

	var nombre = prompt("ingresa tu nombre sos el " + cantidadMostrar, "Matias");

	if (cantidadMostrar === 0 ) {
		resultado += nombre;
		cantidadMostrar = cantidadMostrar + 1;
	}else{
		resultado += delimitador + nombre;
		cantidadMostrar = cantidadMostrar + 1;

	}
}
console.log (resultado);


