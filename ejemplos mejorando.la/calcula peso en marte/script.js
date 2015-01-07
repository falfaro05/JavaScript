var confirmacion = confirm("Quieres saber tu peso en Marte?");

if(confirmacion == true){
	var peso = parseInt(prompt("¿Cual es tu peso en kg?"));

	var pesoEnMarte = (peso / 9.78) * 3.71;

	alert("Tu peso en Marte es: " + pesoEnMarte + "kg");

}else{
	alert("Tu te lo pierdes... Bye Bye!!");
}