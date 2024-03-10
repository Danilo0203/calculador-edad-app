export const obtenerMeses = (ahora: Date, cumpleañosEsteAño: Date) => {
  let meses = 0;
  if (ahora.getTime() < cumpleañosEsteAño.getTime()) {
    meses = ahora.getMonth() + 12 - cumpleañosEsteAño.getMonth();
  } else {
    meses = ahora.getMonth() - cumpleañosEsteAño.getMonth();
  }
  if (ahora.getDate() < cumpleañosEsteAño.getDate()) {
    meses--;
  }
  return meses;
};
