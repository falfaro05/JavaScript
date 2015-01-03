function validarForm(){
	var completado = true;

	var inputNombre = document.getElementById("nombre");
	var inputEmail = document.getElementById("email");
	var inputTelefono = document.getElementById("telefono");

	var validaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


	if(inputNombre.value.length <= 3){	
		completado = false;
	}else if(!isNaN(inputNombre.value)){
		completado = false;
	}



	if(!validaEmail.test(inputEmail.value)){
		completado = false;
	}


	if(isNaN(inputTelefono.value)){
		completado = false;
	}else if(inputTelefono.value.length < 8){
		completado = false;
	}




	if(completado == true){
		alert("Formulario Enviado");
	}else{
		alert("Formulario no Enviado");
	}


	return completado;
}