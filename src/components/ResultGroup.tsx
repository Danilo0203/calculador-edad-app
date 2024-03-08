import { NumberResult } from "./NumberResult";

export const ResultGroup = () => {
  return (
    <>
      <NumberResult texto="años" result="23" />
      <NumberResult texto="meses" result="5" />
      <NumberResult texto="días" result="28" />
    </>
  );
};
