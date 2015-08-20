var MongoClient = require('mongodb').MongoClient;

 //funcion de insertar 
 var insertDocuments = function(db, callback) {
 	//definimos la coleccion donde aplicaremos
 	var collection = db.collection('animales');

  	//ejecutamos la accion sobre esa coleccion
  	collection.insert([{a : 1}, {a : 2}, {a : 3}, {a : 345}, {a : 6}], 
  	//funcion de callback sobre esa accion
  	function(err, result) {
  		//confirmamos que se ejecute sino logueamos error y retornamos
  		if (err) {
  			console.log(err);
  			return;
  		};
  		//Si se efectua correctamente realizamos una respuesta y el callback
  		console.log( "se cargaron: " +result.ops.length + " elementos en");
  		callback(result);
  	});
  }

  var updateDocuments = function (db, callback) {
  	var collection = db.collection('animales');
	//Update dispone de varias opciones mas que las demas acciones
	collection.update({"perro" : "caniche"},{ $set: {"manchas" : 0}}, { upsert: true, multi: true }
		, function(err, result) {
			if (err) {
				console.log(err);
				return;
			};
			console.log( "se cargaron los nuevos valores");
			callback(result);
		});
}

var removeDocuments = function (db, callback) {
	var collection = db.collection('animales');

	collection.remove({ a : 3 },
		function(err, result) {
			if (err) {
				console.log(err);
				return;
			};
			console.log( " se elimino el dato");
			callback(result);
		});
}



// URL de Conexion
var url = 'mongodb://localhost:27017/dev';

// Se utiliza el metodo connect para conecctar con el servidor
MongoClient.connect(url, function(err, db) {
	//se verifica que exista la conexion
	if (err) {
		console.log(err);
		return;
	};
	//se muestra en consola graficamente que existe la conexion correctamente
	console.log("Se conecto correctamente la conexion con: " + url);

	// se ejecutan las diferentes funciones disponibles
	removeDocuments(db, function() {
		db.close();
	});
});