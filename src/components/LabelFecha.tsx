import { TextoProp } from "../tipos";
import { Input } from "./Input";

export const LabelFecha = ({ texto, max, short }: TextoProp) => {
  return (
    <>
      <label
        htmlFor={texto}
        className="mx-2 w-full text-sm font-black tracking-[0.3rem] text-neutralSmokeyGrey lg:text-lg xl:text-2xl 2xl:text-3xl"
      >
        {texto}
        <Input texto={texto} max={max} short={short} />
      </label>
    </>
  );
};
