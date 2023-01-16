/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#crear-formulario").onclick = function () {
  const $cantidadFamiliares = Number(
    document.querySelector("#input-familiares").value
  );

  const nuevoFormulario = document.createElement("form");

  nuevoFormulario.id = "formulario";

  for (i = 1; i <= $cantidadFamiliares; i++) {
    // Si creo los elementos del form fuera del for, se reemplazan entre sí en cada iteración y solamente queda el último
    const labelFamiliar = document.createElement("label");

    labelFamiliar.textContent = `Edad de familiar #${i}: `;

    nuevoFormulario.appendChild(labelFamiliar);

    const inputEdad = document.createElement("input");

    inputEdad.type = "number";

    inputEdad.classList.add("edades");

    nuevoFormulario.appendChild(inputEdad);

    const lineBreak = document.createElement("br");

    nuevoFormulario.appendChild(lineBreak);
  }

  document.querySelector("#formulario").appendChild(nuevoFormulario);

  document.querySelector("#crear-formulario").classList.add("oculto");

  document.querySelector("#calcular").classList.remove("oculto");

  document.querySelector("#limpiar").classList.remove("oculto");

  return false;
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

document.querySelector("#calcular").onclick = function () {
  document.querySelector("#mayor-edad").classList.remove("oculto");

  document.querySelector("#menor-edad").classList.remove("oculto");

  document.querySelector("#promedio-edades").classList.remove("oculto");

  let edades = document.querySelectorAll(".edades");

  let sumaEdades = 0;

  let promedioEdades;

  for (i = 0; i < edades.length; i++) {
    sumaEdades += Number(edades[i].value);
  }

  promedioEdades = sumaEdades / edades.length;

  document.querySelector("#promedio-edades").textContent += promedioEdades;

  let mayorEdad = 0;

  for (i = 0; i < edades.length; i++) {
    if (edades[i].value > mayorEdad) {
      mayorEdad = edades[i].value;
    }
  }

  document.querySelector("#mayor-edad").textContent += mayorEdad;

  let menorEdad = 9999;

  for (i = 0; i < edades.length; i++) {
    if (edades[i].value < menorEdad) {
      menorEdad = edades[i].value;
    }
  }

  document.querySelector("#menor-edad").textContent += menorEdad;

  document.querySelector("#calcular").classList.add("oculto");
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

document.querySelector("#limpiar").onclick = function () {
  document.querySelector("#input-familiares").value = "";

  document.querySelector("#formulario").innerHTML = "";

  document.querySelector("#promedio-edades").textContent =
    "El promedio de edades es:";

  document.querySelector("#mayor-edad").textContent = "La mayor edad es:";

  document.querySelector("#menor-edad").textContent = "La menor edad es:";

  document.querySelector("#crear-formulario").classList.remove("oculto");

  document.querySelector("#calcular").classList.add("oculto");

  document.querySelector("#limpiar").classList.add("oculto");

  document.querySelector("#mayor-edad").classList.add("oculto");

  document.querySelector("#menor-edad").classList.add("oculto");

  document.querySelector("#promedio-edades").classList.add("oculto");
};
