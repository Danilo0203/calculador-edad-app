import { useEffect, useState } from "react";

interface TiposFechas {
  dia: string;
  mes: string;
  año: string;
}

export const useFechas = ({ dia, mes, año }: TiposFechas) => {
  const [fecha, setFecha] = useState({ dia, mes, año });

  const nuevaFecha = () => {
    setFecha({ dia: "12", mes: "12", año: "2024" });
  };
  useEffect(() => {
    nuevaFecha();
  });

  return [fecha];
};
