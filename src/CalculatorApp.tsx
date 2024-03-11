import { useState } from "react";
import { Form } from "./components/Form";
import { ResultGroup } from "./components/ResultGroup";
import { TipoData } from "./tipos";
import { calcularEdad } from "./helpers/calcularEdad";

export const CalculatorApp = () => {
  const [calcFechas, setCalcFechas] = useState({ dia: "", mes: "", año: "" });

  // Función para eliminar ceros de un número
  const eliminarCeros = (valor: string) => {
    return parseInt(valor, 10).toString().trim();
  };

  const fechas = ({ data }: TipoData) => {
    const { año, dia, mes } = data;
    if (año === "") {
      setCalcFechas({ año: "- -", mes: "- -", dia: "- -" });
      return;
    }
    const añoFormateado = eliminarCeros(año);
    const diaFormateado = eliminarCeros(dia);
    const mesFormateado = eliminarCeros(mes);

    const [años, meses, dias] = calcularEdad(`${añoFormateado}-${mesFormateado}-${diaFormateado}`);
    setCalcFechas({ año: años, dia: dias, mes: meses });
  };
  return (
    <article className="m-auto min-w-full rounded-t-3xl rounded-bl-3xl rounded-br-[8rem] bg-neutralWhite px-4 py-12 sm:rounded-br-[10rem] md:flex md:flex-col md:px-10 lg:rounded-br-[14rem]">
      <Form setCalFechas={fechas} />
      <ResultGroup onFechas={calcFechas} />
    </article>
  );
};
