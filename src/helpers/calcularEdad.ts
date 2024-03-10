import { obtenerCumpleañosDeEsteAño, obtenerAños, obtenerMeses, obtenerDias } from "./logica-calculo-edad";

export const calcularEdad = (fechaDeNacimiento: string) => {
  const fechaActual = new Date();
  const nacimiento = new Date(fechaDeNacimiento);
  const ahora = new Date(fechaActual.getTime());
  const cumpleañosEsteAño = obtenerCumpleañosDeEsteAño(fechaDeNacimiento, ahora);
  const años = obtenerAños(nacimiento, ahora, cumpleañosEsteAño);
  const meses = obtenerMeses(ahora, cumpleañosEsteAño);
  const dias = obtenerDias(ahora, cumpleañosEsteAño);
  return [años.toString(), meses.toString(), dias.toString()];
};
