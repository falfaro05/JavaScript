var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra","Papel","Tijera"];

var opcionUsuario = parseInt(prompt("Que eliges? \n Piedra: 0 \n Papel: 1 \n Tijera: 2", 0));
var opcionMaquina = Math.floor(Math.random()*3);

alert("la maquina eligio " + opciones[opcionMaquina]);

switch(opcionUsuario){
	case 0: alert("Elegiste Piedra"); 
		if(opcionUsuario == opcionMaquina){
			alert("Es un Empate");
		}else if(opcionMaquina == papel){
			alert("Has perdido");
		}else{
			alert("Ganaste");
		}

	break;
	case 1: alert("Elegiste Papel");

		if(opcionUsuario == opcionMaquina){
			alert("Es un Empate");
		}else if(opcionMaquina == piedra){
			alert("Ganaste");
		}else{
			alert("Has Perdido");
		}

	break;
	case 2: alert("Elegiste Tijeras");

		if(opcionUsuario == opcionMaquina){
			alert("Es un Empate");
		}else if(opcionMaquina == papel){
			alert("Ganaste");
		}else{
			alert("Has Perdido");
		}

	break;

	default: alert("Elegiste un valor incorrecto");
}


