let meses30 = ["abril", "junio", "septiembre", "noviembre"];
let meses31 = ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"];
let febrero = "febrero";
let seguirIngresando = true;
while (seguirIngresando) {
  let mesIngresado = prompt("Ingrese el mes que desea reservar (por ejemplo, enero, febrero, marzo, etc.):");
  mesIngresado = mesIngresado.toLowerCase();
  let diaIngresado = parseInt(prompt("Ingrese el dia que desea reservar (por ejemplo, 1, 2, 3, etc.):"));
  if (meses30.includes(mesIngresado)) {
  } 
  else if (meses31.includes(mesIngresado)) {
  } 
  else if (mesIngresado === febrero) {
  }
  else {
    alert("El dia o el mes ingresado no es válido. Por favor, verifique los datos");
    continue;
  }
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  alert("La Reserva para " + nombre + " " + apellido + " en el mes de " + mesIngresado + " y el día " + diaIngresado + " fue exitosa");
  let respuesta = prompt("¿Quieres hacer otra reserva? (si o no)");
  if (respuesta.toLowerCase() !== "sí" && respuesta.toLowerCase() !== "si") {
    seguirIngresando = false;
  }
}
alert("Programa de reserva finalizado");