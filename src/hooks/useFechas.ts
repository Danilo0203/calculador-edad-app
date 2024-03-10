import { useEffect, useState } from "react";

export const useFechas = (dia: string, mes: string, año: string) => {
  const [fecha, setFecha] = useState({ dia: "", mes: "", año: "" });

  const nuevaFecha = () => {
    setFecha({ dia, mes, año });
  };
  useEffect(() => {
    nuevaFecha();
  });

  return [fecha];
};
