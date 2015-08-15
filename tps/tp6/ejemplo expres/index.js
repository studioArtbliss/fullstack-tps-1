var express = require('express');
var app = express();
var usuarios = [];


//defino la ruta de archivos estaticos
app.use(express.static('public'));

//midelware de logeo de llamadas en el servidor
app.use(function (req, res, next) {

	console.log('se llamo a la pagina'+ req.originalUrl);
	next();
});


//se devuelve el valor dependiendo el verbo get
var cantidad = 0; 

app.post('/', function (req, res) {
	cantidad++
	var infoGet = "hola desde POST al clic del boton " + cantidad;
	res.send(infoGet);
});

app.get('/:us', function (req, res) {
	usuarios.push(req.params.us);
	res.send("Se llamo al usuario: " + usuarios + "<br/>" );
});


var server = app.listen(3000, function () {
	console.log('se ejecuto el servidor puerto 3000');
});
