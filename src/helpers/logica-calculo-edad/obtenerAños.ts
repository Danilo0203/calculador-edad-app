export const obtenerAños = (nacimiento: Date, ahora: Date, cumpleañosEsteAño: Date) => {
  let años = ahora.getFullYear() - nacimiento.getFullYear();
  if (ahora.getTime() < cumpleañosEsteAño.getTime()) {
    años--;
  }
  return años;
};
