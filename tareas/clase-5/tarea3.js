//TAREA 3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const horasArray = document.querySelectorAll(".horas");

const minutosArray = document.querySelectorAll(".minutos");

const segundosArray = document.querySelectorAll(".segundos");

let sumaSegundos = 0;

for (i = 0; i <= 4; i++) {
  sumaSegundos += Number(segundosArray[i].innerHTML);
}

let sumaMinutos = 0;

for (i = 0; i <= 4; i++) {
  sumaMinutos += Number(minutosArray[i].innerHTML);
}

let sumaHoras = 0;

for (i = 0; i <= 4; i++) {
  sumaHoras += Number(horasArray[i].innerHTML);
}

let segundosTotales = sumaSegundos % 60;

let minutosTotales = (sumaMinutos + Math.floor(sumaSegundos / 60)) % 60;

let horasTotales =
  sumaHoras + Math.floor((sumaMinutos + Math.floor(sumaSegundos / 60)) / 60);

document.querySelector("#calcular-duracion-total").onclick = function () {
  const duracionFinal = `${horasTotales} horas, ${minutosTotales} minutos, ${segundosTotales} segundos.`;

  document.querySelector("#duracion-total").innerHTML = duracionFinal;
};
