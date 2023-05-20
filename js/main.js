/*Siguiendo lo sugerido en las correciones agregue una class con su constructor respectivo en este caso para llegar a darle funcionabilidad tuve que eliminar y reformular la variables let reservas y la const reserva*/
class Reserva {
  constructor(mes, dia, nombre, apellido, descripcion) {
    this.mes = mes;
    this.dia = dia;
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion = descripcion;
  }
}
/*estas constantes almacenan los meses segun los que los dias que poseen cada uno es decir si llega a 31, 30, 28*/
const meses30 = ["abril", "junio", "septiembre", "noviembre"];
const meses31 = ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"];
const febrero = "febrero";
let continuarReservando = true;
let reservas = [];
/* esta funcion permite la diferencion en los dias de las constantes segun su mes si es mes30, mes31, mes febrero:28*/
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
/* esta funcion permite ingresar meses y dias siempre en cuando se cumpla las condiciones del esDiaValido de lo contrario mandara un alert y pedira ingresar nuevamente*/
function realizarReserva() {
  let mesIngresado = prompt("Ingrese el mes que desea reservar (por ejemplo, enero, febrero, marzo, etc.):");
  mesIngresado = mesIngresado.toLowerCase();
  let diaIngresado = parseInt(prompt("Ingrese el día que desea reservar (por ejemplo, 1, 2, 3, etc.):"));

  if (!esDiaValido(mesIngresado, diaIngresado)) {
    alert(`El día ingresado no es válido para el mes de ${mesIngresado}. Por favor, verifique los datos.`);
    return;
  }
/* una vez validado esDiaValido pedira ingresar nombre, apellido y una descrion*/
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let descripcion = prompt("Ingrese motivo de consulta:");

  const reserva = new Reserva(mesIngresado, diaIngresado, nombre, apellido, descripcion);
  /*pushea al array los datos ingresados por prompt*/
  reservas.push(reserva);
  alert(`La reserva para ${nombre} ${apellido} en el mes de ${mesIngresado} para el día ${diaIngresado} fue exitosa, se atendera su consulta ${descripcion} en la fecha ingresada`);
}
/*ciclo while para seguir ingresando reserva*/
while (continuarReservando) {
  realizarReserva();

  let respuesta = confirm("¿Quieres hacer otra reserva?");
  if (!respuesta) {
    continuarReservando = false;
  }
}

console.log(reservas);
/*este cliclo busca eliminar una vez que eliminarReserva sea verdadero las reservas encontradas en el array*/
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
    alert(`La reserva de ${nombreEliminar} ${apellidoEliminar} ha sido eliminada exitosamente.`);
  } else {
    alert(`No se encontró ninguna reserva asociada a ${nombreEliminar} ${apellidoEliminar}.`);
  }

  eliminarReserva = confirm("¿Desea eliminar otra reserva?");
}

alert("Programa de reserva finalizado");
