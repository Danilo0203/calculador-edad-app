import { Fecha } from "../tipos";
import { NumberResult } from "./NumberResult";

export const ResultGroup = ({ onFechas }: { onFechas: Fecha }) => {
  const { dia, mes, año } = onFechas;

  return (
    <>
      <NumberResult texto="años" result={año} />
      <NumberResult texto="meses" result={mes} />
      <NumberResult texto="días" result={dia} />
    </>
  );
};
