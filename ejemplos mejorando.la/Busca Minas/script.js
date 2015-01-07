var campo = [[0,1,0,1,0,1],
			 [1,0,1,0,1,0]];

var posX = parseInt(prompt("Ingresa una posicion en el eje x, las opciones son: \n 0\n 1"));
var posY = parseInt(prompt("Ingresa una posicion en el eje y, las opciones son: \n 0\n 1\n 2\n 3\n 4\n 5"));

var textos = ["cesped","Bomba"];

if(isNaN(posX) || isNaN(posY)){

	alert("escribe cosas coherentes... muere por idiota BOOOOOOOMM");

}else if((posX < 0 || posX > 1 ) || (posY < 0 || posY > 5 )){

	alert("Te saliste del rango.... muereeee..BOOOOOOOMM");

}else if(campo[posX][posY] == 0){

	alert(textos[campo[posX][posY]]);
	alert("Ganaaaaaaaasteeeeee");


}else{
	
	alert(textos[campo[posX][posY]]);
	alert("JAJAJAJAJAJA Perdiiiiiiiiiissssteeeeeeeeee");

}



	