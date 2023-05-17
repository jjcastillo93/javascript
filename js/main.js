const meses30 = ["abril", "junio", "septiembre", "noviembre"];
const meses31 = ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"];
const febrero = "febrero";
let seguirIngresando = true;
let reservas = [];

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
  let diaIngresado = parseInt(prompt("Ingrese el día que desea reservar (por ejemplo, 1, 2, 3, etc.):"));

  if (!esDiaValido(mesIngresado, diaIngresado)) {
    alert("El día ingresado no es válido para el mes de " + mesIngresado + ". Por favor, verifique los datos.");
    return;
  }

  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let descripcion = prompt("Ingrese motivo de consulta:");

  const reserva = {
    mes: mesIngresado,
    dia: diaIngresado,
    nombre: nombre,
    apellido: apellido,
    descripcion: descripcion
  };

  reservas.push(reserva);
  alert("La reserva para " + nombre + " " + apellido + " en el mes de " + mesIngresado + " y el día " + diaIngresado + " fue exitosa " + "para atender su consulta " + descripcion);
}

while (seguirIngresando) {
  realizarReserva();

  let respuesta = confirm("¿Quieres hacer otra reserva?");
  if (!respuesta) {
    seguirIngresando = false;
  }
}

console.log(reservas);

let eliminarReserva = confirm("¿Desea eliminar una reserva?");
while (eliminarReserva) {
  let nombreEliminar = prompt("Ingrese el nombre asociado a la reserva que desea eliminar:");
  let apellidoEliminar = prompt("Ingrese el apellido asociado a la reserva que desea eliminar:");
  let reservaEncontrada = false;

  for (let i = 0; i < reservas.length; i++) {
    if (reservas[i].nombre === nombreEliminar && reservas[i].apellido === apellidoEliminar) {
      reservas.splice(i, 1);
      reservaEncontrada = true;
      break;
    }
  }

  if (reservaEncontrada) {
    alert("La reserva de " + nombreEliminar + " " + apellidoEliminar + " ha sido eliminada exitosamente.");
  } else {
    alert("No se encontró ninguna reserva asociada a " + nombreEliminar + " " + apellidoEliminar + ".");
  }

  eliminarReserva = confirm("¿Desea eliminar otra reserva?");
}

alert("Programa de reserva finalizado");
