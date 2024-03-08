import { LabelProps } from "../tipos";

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <>
      <label
        className="mx-2 w-full text-sm font-semibold tracking-[0.3rem] text-neutralSmokeyGrey lg:text-sm xl:text-sm  2xl:text-xl"
        {...props}
      >
        {children}
      </label>
    </>
  );
};
