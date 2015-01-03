function aparecerDesaparecer(boton){

	var verificar = document.getElementById("contenido").style.visibility;
	//var activo = 

	if(verificar == "visible"){
		document.getElementById("contenido").style.visibility = "hidden";
		boton.value = "aparecer";
		document.getElementById("chvisible").checked = false;
		document.getElementById("chnovisible").checked = true;

	}else{
		document.getElementById("contenido").style.visibility = "visible";
		boton.value = "desaparecer";
		document.getElementById("chvisible").checked = true;
		document.getElementById("chnovisible").checked = false;
			
	}
}



