// tu codigo va aca
function callbackPromedio(num1, num2, num3, callback){
		var promedio=(num1+num2+num3)/3;
		return callback(promedio);
	}
/*callbackPromedio(num1, num2, num3,function resultado){
	console.log("El resultado es: "+ resultado);
} reevaluar codigo en busqueda de otro resultado*/

/*segundero */

var contador = 1;
 	function segundero(){
 	var segundos = document.getElementById("titulo").innerHTML = contador;
 	segundos.value = contador;
 	contador++;
 }
 	var intervalo = setInterval(segundero,1000);
 
 function tiempoDetenido() {
    clearInterval(intervalo);
 }