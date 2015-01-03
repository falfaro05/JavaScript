function estilosTabla(){

	var tabla = document.getElementById("tabla1");

	var celdas = tabla.getElementsByTagName("td");

	for(var i=0; i<celdas.length; i++){

		if(i%2 == 0){
			celdas[i].className = "pares";

		}else{
			celdas[i].className = "impares";
		}


	}
}