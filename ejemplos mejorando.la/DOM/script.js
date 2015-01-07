function ObjPersona(){

var Persona = {
	nombre: "Nombre",
	apellido: "Apellido",
	edad: 50,
	estatura: 1.5,
	sexo: "Masculino",
	imagen: "",
	sumar: function(a,b,c){
		return a+b+c;
	} 
}

return Persona;

}


var Franklin = new ObjPersona();
Franklin.nombre = "Franklin";
Franklin.apellido = "Alfaro";
Franklin.edad = 23;
Franklin.sexo = "Masculino";
Franklin.imagen = "Captura1.png"

var Tania = new ObjPersona();
Tania.nombre = "Tania";
Tania.apellido = "Orellana";
Tania.edad = 17;
Tania.sexo = "Femenino";
Tania.imagen = "Captura2.png";

nombre.innerText += Tania.nombre;
document.getElementById("apellido").innerHTML += Tania.apellido;
document.getElementById("Edad").innerHTML += Tania.edad;
document.getElementById("sexo").innerHTML += Tania.sexo;
document.getElementById("imagen").src = Tania.imagen;
document.getElementById("operacion").innerHTML += Tania.sumar(5,8,13);