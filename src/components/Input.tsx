import { useState } from "react";
import { TextoProp } from "../tipos";

export const Input = ({ texto, max, short }: TextoProp) => {
  const [fecha, setFecha] = useState("");
  const fechaUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "DÍA" || id === "MES") {
      if (value.length > 2) return;
    } else if (id === "AÑO") {
      if (value.length > 4) return;
    }
    setFecha(value);
  };

  return (
    <>
      <input
        className="appearance-[textfield] mt-1 w-full rounded-lg border-[1.5px] border-neutralLightGrey py-3 pl-3 text-xl font-extrabold text-neutralOffBlack outline-none duration-300 hover:border-primaryPurple focus:border-primaryPurple lg:text-2xl xl:text-3xl"
        type="number"
        id={texto}
        min={1}
        max={max}
        placeholder={short}
        required
        onChange={fechaUser}
        value={fecha}
      ></input>
    </>
  );
};
