import { useState } from "react";
import { Form } from "./components/Form";
import { ResultGroup } from "./components/ResultGroup";
import { TipoData } from "./tipos";
import { calcularEdad } from "./helpers/calcularEdad";

export const CalculatorApp = () => {
  const [calcFechas, setCalcFechas] = useState({ dia: "", mes: "", año: "" });
  const fechas = ({ data }: TipoData) => {
    const { año, dia, mes } = data;
    const [resDia, resMes, resAño] = calcularEdad(+dia, +mes, +año);

    setCalcFechas({ año: resAño, dia: resDia, mes: resMes });
  };
  return (
    <article className="min-w-full rounded-t-3xl rounded-bl-3xl rounded-br-[5rem] bg-neutralWhite px-4 py-12 md:flex md:flex-col md:px-10">
      <Form setCalFechas={fechas} />
      <ResultGroup onFechas={calcFechas} />
    </article>
  );
};
