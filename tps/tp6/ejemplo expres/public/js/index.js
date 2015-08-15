var ejecutarGet = function() {
	$.ajax({
		type: 'GET',
		url: '/urlGet',
		success: function(data) {

			$('#porGet').append(data + "<br/>");
		},
		error: function() {
			console.log("No hay conexion con el servidor");
		}
	});
};

$(document).ready(function() {

	ejecutarGet();

	var $ingresarBtn = $('#btnPost');
	//Al ejecutar el boton hace la llamada por POST
	$ingresarBtn.on('click', function() {

		$.ajax({
			type: 'POST',
			url: '/',
			
			success: function(data) {
				//console.log(data);
				$('#porPost').append(data + "<br/>");
			},
			error: function() {
				console.log("No hay conexion con el servidor");
			}
		});
		return;
	});


});

