
function cambiar(){
	document.getElementById("link").href="http://www.youtube.com";
}


function cambioFondo(){
	document.getElementById("miDiv").style.background= "blue";
}

function cambFoco(foco){
	foco.className = "enFoco";
}

function determinaTecla(event){
	alert(event.keyCode);
}