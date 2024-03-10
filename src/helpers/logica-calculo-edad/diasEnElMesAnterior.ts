export const diasEnElMesAnterior = (fecha:Date) => {
  const clon = new Date(fecha.getTime());
  clon.setMonth(clon.getMonth(), 0);
  return clon.getDate();
};

// const diasEnElMes = (fecha) => {
//   const clon = new Date(fecha.getTime());
//   clon.setMonth(clon.getMonth() + 1, 0);
//   return clon.getDate();
// };
