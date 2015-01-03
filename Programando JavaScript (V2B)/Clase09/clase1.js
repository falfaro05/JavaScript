function conFondo(div){
	div.style.background = "yellow";
}

function sinFondo(div){
	div.style.background = "white";
}

function pBoton(){

	var divVisible = document.getElementById("caja").style.visibility;

	if(divVisible == "visible"){
		document.getElementById("caja").style.visibility = "hidden";
		document.getElementById("boton").value = "aparecer";
		document.getElementById("chvisible").checked = false;
		
	}else{
		document.getElementById("caja").style.visibility = "visible";
		document.getElementById("boton").value = "desaparecer";
		document.getElementById("chvisible").checked = true;
		
	}
}