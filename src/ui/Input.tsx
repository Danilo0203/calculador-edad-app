import React from "react";
import { InputProps } from "../tipos";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
  return (
    <>
      <input
        className={`mt-1 w-full rounded-lg border-[1.5px] py-3 pl-5 text-xl font-extrabold text-neutralOffBlack outline-none duration-300 lg:text-2xl xl:text-3xl ${error ? "border-red-500" : " border-gray-300"}`}
        ref={ref}
        {...props}
      ></input>
    </>
  );
});
