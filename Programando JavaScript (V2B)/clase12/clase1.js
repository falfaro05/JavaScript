function entroEnFoco(foco){

	foco.className = "enfoco";

}

function quitarFoco(foco){

	foco.className = "";

}

function requerido(reque){
	if(reque.value == ""){
		reque.className = "requerido";
	}
}

function revisarEdad(edad){
	if(isNaN(edad.value)){
		alert("valor incorrecto");
	}
}

function revisarLongitud(longitud){
	if(longitud.value.length <= 4){
		longitud.className = "requerido";
	}
}

function mensajeError(elemento){

	var error = document.getElementById("vacioError");
	if(error != undefined){
		elemento.parentNode.removeChild(vacioError);
	}

	if(elemento.value == ""){
		elemento.parentNode.innerHTML += "<p id='vacioError'>Valor incorrecto</p>";
	}
}

function validarForm(){

	var completado = true;

	if(document.getElementById("nombre").value.length < 4){
		completado = false;
	}

	if(document.getElementById("edad").value == 0){
		completado = false;
	}

	if(document.getElementById("acepterminos").checked == ""){
		completado = false;
	}


	if(completado == true){
		alert("Formulario Enviado");
	}else{
		alert("Completa los campos para enviar");
	}
}

function abrirVentana(){
	window.open("http://www.google.com", "google", "width=200px, height=300px, toolbar=yes, status=no ");
}