import { LabelProps } from "../tipos";

export const Label = ({children, ...props}: LabelProps) => {
  return (
    <>
      <label
        className="mx-2 w-full text-sm font-black tracking-[0.3rem] text-neutralSmokeyGrey lg:text-lg xl:text-2xl 2xl:text-3xl"
        {...props}
      >
        {children}
      </label>
    </>
  );
};
