export const calcularEdad = (dia: number, mes: number, año: number) => {
  const fecha = new Date();
  const [diaActual, mesActual, añoActual] = [fecha.getDate(), fecha.getMonth(), fecha.getFullYear()];
  const fechaNacim = new Date(`${dia}-${mes}-${año}`);
  const [diaNaci, mesNaci, añoNaci] = [fechaNacim.getDate(), fechaNacim.getMonth(), fechaNacim.getFullYear()];

  let edad = añoActual - añoNaci;
  if (mesActual < mesNaci || (mesActual == mesNaci && diaActual < diaNaci)) {
    edad--;
  }
  // Calcula diferencia en años
  const difAños = edad;

  /* Calcula diferencia en meses */
  let difMeses = mesActual - mesNaci;
  if (mesActual == mesNaci) difMeses = 12;
  if (difMeses < 0) {
    difMeses += 12;
  }

  // Calcula diferencia en dias
  let difDias = diaActual - diaNaci;
  if (difDias < 0) {
    const mesAntUlDia = new Date(añoActual, mesActual, 0).getDate();
    difDias = mesAntUlDia + difDias;
    difMeses--;
  }
  if (difMeses == 12 && difDias >= 0) difMeses = 0;
  return [difDias.toString(), difMeses.toString(), difAños.toString()];
};
