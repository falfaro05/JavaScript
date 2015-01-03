function miFuncion(desde, hasta, seleccionado){

	for(var i=desde; i<=hasta; i++){

		if(seleccionado == i){

			document.write('<option selected="selected">' + i + "</option>");
		}else{

			document.write("<option>" + i + "</option>");
		}
		
	}
}