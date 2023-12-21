function analizarNumeroCedula(cedula) {
  if (typeof cedula !== 'number' || cedula <= 0 || !Number.isInteger(cedula)) {
    return 'Ingrese un número de cédula válido';
  }

  const cedulaStr = cedula.toString();
  let sumatoria = 0;
  let numerosPares = 0;
  let numerosImpares = 0;

  for (let i = 0; i < cedulaStr.length; i++) {
    const digito = parseInt(cedulaStr[i], 10);
    if (digito % 2 === 0) {
      numerosPares++;
    } else {
      numerosImpares++;
    }
    sumatoria += digito;
  }
  console.log(`Sumatoria de los dígitos: ${sumatoria}`);
  console.log(`Números pares: ${numerosPares}`);
  console.log(`Números impares: ${numerosImpares}`);
}

const NumeroEjemplo = 1316311297; 
analizarNumeroCedula(NumeroEjemplo);
