import { ResultProp } from "../tipos";

export const NumberResult = ({ texto, result }: ResultProp) => {
  return (
    <div className="flex items-center gap-2">
      <div className=" py-1 text-5xl font-black italic text-primaryPurple lg:text-6xl xl:text-7xl 2xl:text-8xl">
        <span className="hidden tracking-[0.5rem]">--</span>
        {result}
      </div>
      <p className="text-5xl font-black italic text-neutralOffBlack lg:text-6xl xl:text-7xl 2xl:text-8xl">{texto}</p>
    </div>
  );
};
