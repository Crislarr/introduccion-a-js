/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario 
anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let contadorDeSueldos = 1;

document.querySelector("#boton-agregar").onclick = function () {
  contadorDeSueldos++;

  const $tablaSueldos = document.querySelector("#tabla-sueldos");

  const br = document.createElement("br");

  br.id = `br-${contadorDeSueldos}`;

  const nuevoLabel = document.createElement("label");

  nuevoLabel.id = `label-${contadorDeSueldos}`;

  const nuevoInput = document.createElement("input");

  nuevoInput.id = `input-${contadorDeSueldos}`;

  nuevoInput.type = "number";

  nuevoInput.classList.add("sueldos");

  $tablaSueldos.appendChild(br);

  $tablaSueldos.appendChild(nuevoLabel);

  $tablaSueldos.appendChild(nuevoInput);

  nuevoLabel.textContent = `Sueldo #${contadorDeSueldos} `;
};

//////////////////////////////////////////////////////////////////////////////////

document.querySelector("#boton-eliminar").onclick = function () {
  let $tablaSueldos = document.querySelector("#tabla-sueldos");

  let $labelABorrar = document.querySelector(`#label-${contadorDeSueldos}`);

  let $inputABorrar = document.querySelector(`#input-${contadorDeSueldos}`);

  let $brABorrar = document.querySelector(`#br-${contadorDeSueldos}`);

  $tablaSueldos.removeChild($labelABorrar);

  $tablaSueldos.removeChild($inputABorrar);

  $tablaSueldos.removeChild($brABorrar);

  contadorDeSueldos--;
};

//////////////////////////////////////////////////////////////////////////////////

document.querySelector("#boton-calcular").onclick = function () {
  let elementosOcultos = document.querySelectorAll(".oculto");

  elementosOcultos.forEach((elemento) => {
    elemento.classList.remove("oculto");
  });

  const sueldos = document.querySelectorAll(".sueldos");

  let sumaSueldos = 0;

  let promedioSueldos;

  for (i = 0; i < sueldos.length; i++) {
    if (!sueldos[i]) {
    } else {
      sumaSueldos += Number(sueldos[i].value);
    }
  }
  let sueldosFiltrados = 0;

  for (i = 0; i < sueldos.length; i++) {
    if (!sueldos[i].value) {
    } else {
      sueldosFiltrados++;
    }
  }

  console.log(sueldosFiltrados);

  promedioSueldos = sumaSueldos / sueldosFiltrados;

  document.querySelector("#promedio-anual").textContent += promedioSueldos;

  let mayorSueldo = 0;

  for (i = 0; i < sueldos.length; i++) {
    if (!sueldos[i].value) {
    } else {
      if (sueldos[i].value > mayorSueldo) {
        mayorSueldo = sueldos[i].value;
      }
    }
  }

  document.querySelector("#mayor-salario").textContent += mayorSueldo;

  let menorSueldo = 99999999999999;

  for (i = 0; i < sueldos.length; i++) {
    if (!sueldos[i].value) {
    } else {
      sueldos[i].value < menorSueldo;
      menorSueldo = sueldos[i].value;
    }
  }

  document.querySelector("#menor-salario").textContent += menorSueldo;

  let promedioMensualSueldos = promedioSueldos / 12;

  document.querySelector("#promedio-mensual").textContent +=
    promedioMensualSueldos;
};
