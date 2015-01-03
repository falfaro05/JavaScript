function crearOption(desde, hasta, seleccionado){

	for(var i=desde; i<=hasta; i++){
		
		if(seleccionado == i){
			document.write('<option selected="selected">');
		}else{
			document.write("<option>");
		}
		
		document.write(i);
		document.write("</option>");

	}

}