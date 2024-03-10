import { LabelProps } from "../tipos";

export const Label = ({ children, error, ...props }: LabelProps) => {
  return (
    <>
      <label
        className={`mx-2 w-full text-sm font-semibold tracking-[0.3rem]  lg:text-sm xl:text-sm  2xl:text-xl ${error ? "text-red-500" : "text-neutralSmokeyGrey"}`}
        {...props}
      >
        {children}
      </label>
    </>
  );
};
