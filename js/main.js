let numero;
let continuar = true;

while (continuar) {
  numero = parseFloat(prompt("Ingrese un número del 1 al 10"));

  while (numero < 1 || numero > 10 || isNaN(numero)) {
    console.log('Ingresó un número no válido. Inténtelo de nuevo.');
    numero = parseFloat(prompt("Ingrese un número del 1 al 10"));
  }

  if (numero > 4) {
    console.log('Tu número está entre 5 y 10');
  } else {
    console.log('Tu número es menor a 5');
  }

  let respuesta = prompt("Ingrese 'terminar' para salir de lo contrario ingrese cualquier cosa para continuar ingresando números");

  if (respuesta === "terminar") {
    continuar = false;
    console.log('termino el programa')
  }
}
