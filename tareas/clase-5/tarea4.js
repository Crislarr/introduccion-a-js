//
//

//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

//

const numerosArray = Array.from(document.querySelectorAll("li"));

//
//

let promedio = 0;

for (i = 0; i < numerosArray.length; i++) {
  promedio += Number(numerosArray[i].innerText);
}

promedio /= numerosArray.length;

document.querySelector("#media").innerText += promedio;

//
//

let mayorNumero = Number(numerosArray[0].innerText);

for (i = 0; i < numerosArray.lenght; i++) {
  if (Number(numerosArray[i].innerText) > mayorNumero) {
    mayorNumero = Number(numerosArray[i].innerText);
  }
}

document.querySelector("#mayor-numero").innerText += mayorNumero;

//
//

let menorNumero = Number(numerosArray[0].innerText);

for (i = 0; i < numerosArray.length; i++) {
  if (Number(numerosArray[i].innerText) < menorNumero) {
    menorNumero = Number(numerosArray[i].innerText);
  }
}

document.querySelector("#menor-numero").innerText += menorNumero;

//
//

let moda;

let maxCount = 0;
for (i = 0; i < numerosArray.length; i++) {
  let count = 0;
  for (j = 0; j <= i; j++) {
    if (
      Number(numerosArray[i].innerText) === Number(numerosArray[j].innerText)
    ) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    moda = Number(numerosArray[i].innerText);
  }
}

document.querySelector("#moda").innerText += moda;

//
//
