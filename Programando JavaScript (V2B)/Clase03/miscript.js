var miArray = new Array();

var precio;

do{
	precio = prompt("Ingresa un precio");
	if(precio != 0 && precio != undefined){
		miArray.push(parseInt(precio));
	}else{
		alert("Has salido de la aplicacion");
	}
}while(precio != 0 && precio != undefined);

document.write("Ingresaste " + miArray.length + " precios<br />");
document.write("Los precios son: " + miArray + "<br />");

var suma = 0;

for(var i=0; i<miArray.length; i++){
	suma = suma + miArray[i];
}

document.write("La suma de estos es: " + suma + "<br />");

var promedio = suma / miArray.length;

document.write("El promedio de estos es: " + promedio);