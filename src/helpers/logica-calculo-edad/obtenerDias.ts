import { diasEnElMesAnterior } from "./diasEnElMesAnterior";

export const obtenerDias = (ahora: Date, cumpleañosEsteAño: Date) => {
  if (ahora.getTime() < cumpleañosEsteAño.getTime()) {
    const conteoDeDiasDelMesAnterior = diasEnElMesAnterior(cumpleañosEsteAño);
    const diaDeNacimiento = cumpleañosEsteAño.getDate();
    const diaDelMesActual = ahora.getDate();
    let diasQueVivioEnElMesAnterior = conteoDeDiasDelMesAnterior - diaDeNacimiento;
    if (diasQueVivioEnElMesAnterior < 0) {
      diasQueVivioEnElMesAnterior = 0;
    }
    return diasQueVivioEnElMesAnterior + diaDelMesActual;
  } else {
    if (cumpleañosEsteAño.getDate() <= ahora.getDate()) {
      return ahora.getDate() - cumpleañosEsteAño.getDate();
    } else {
      let diasQueVivioEnElMesAnterior = diasEnElMesAnterior(ahora) - cumpleañosEsteAño.getDate();
      if (diasQueVivioEnElMesAnterior < 0) {
        diasQueVivioEnElMesAnterior = 0;
      }
      return diasQueVivioEnElMesAnterior + ahora.getDate();
    }
  }
};
