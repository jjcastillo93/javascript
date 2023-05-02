const meses30 = ["abril", "junio", "septiembre", "noviembre"];
const meses31 = ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"];
const febrero = "febrero";
let seguirIngresando = true;

function esDiaValido(mes, dia) {
  if (meses30.includes(mes)) {
    return dia >= 1 && dia <= 30;
  } else if (meses31.includes(mes)) {
    return dia >= 1 && dia <= 31;
  } else if (mes === febrero) {
    return dia >= 1 && dia <= 28;
  } else {
    return false;
  }
}

function realizarReserva() {
  let mesIngresado = prompt("Ingrese el mes que desea reservar (por ejemplo, enero, febrero, marzo, etc.):");
  mesIngresado = mesIngresado.toLowerCase();
  let diaIngresado = parseInt(prompt("Ingrese el dia que desea reservar (por ejemplo, 1, 2, 3, etc.):"));
  
  if (!esDiaValido(mesIngresado, diaIngresado)) {
    alert("El día ingresado no es válido para el mes de " + mesIngresado + ". Por favor, verifique los datos.");
    return;
  }
  
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  alert("La Reserva para " + nombre + " " + apellido + " en el mes de " + mesIngresado + " y el día " + diaIngresado + " fue exitosa");
}

while (seguirIngresando) {
  realizarReserva();
  
  let respuesta = prompt("¿Quieres hacer otra reserva? (si o no)");
  if (respuesta.toLowerCase() !== "sí" && respuesta.toLowerCase() !== "si") {
    seguirIngresando = false;
  }
}

alert("Programa de reserva finalizado");
