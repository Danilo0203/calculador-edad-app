export const obtenerCumpleañosDeEsteAño = (fechaDeNacimiento: string, fecha: Date) => {
  const cumpleañosEsteAño = new Date(fechaDeNacimiento);
  cumpleañosEsteAño.setFullYear(fecha.getFullYear());
  return cumpleañosEsteAño;
};
