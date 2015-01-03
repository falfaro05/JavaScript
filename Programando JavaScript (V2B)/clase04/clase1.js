var fecha = new Date();

var dia = fecha.getDay();

var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]; 

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

/*switch(hoy){

	case 0: alert("Hoy es Domingo"); break;
	case 1: alert("Hoy es Lunes"); break;
	case 2: alert("Hoy es Lunes"); break;
	case 3: alert("Hoy es Lunes"); break;
	case 4: alert("Hoy es Lunes"); break;
	case 5: alert("Hoy es Lunes"); break;
	case 6: alert("Hoy es Lunes"); break;

}
*/

var anio = fecha.getFullYear();

var mes = fecha.getMonth();

var hoy = fecha.getDate();

alert("Hoy es " + dias[dia] + " " + hoy + " de " + meses[mes] + " del " + anio);