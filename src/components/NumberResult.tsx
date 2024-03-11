export const NumberResult = ({ texto, result }: { texto: string; result: string }) => {
  let formatoTexto: string = texto;

  // Verifica si result es un número y lo convierte a entero
  const resultadoNumero: number = parseInt(result);

  // Realiza la lógica condicional basada en el resultado numérico y el texto
  if (!isNaN(resultadoNumero) && resultadoNumero === 1) {
    switch (texto) {
      case "días":
        formatoTexto = "día";
        break;
      case "años":
        formatoTexto = "año";
        break;
      case "meses":
        formatoTexto = "mes";
        break;
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="py-1 text-5xl font-black italic text-primaryPurple lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {result ? result : `- -`}
      </div>
      <p className="text-5xl font-black italic text-neutralOffBlack lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {formatoTexto}
      </p>
    </div>
  );
};
