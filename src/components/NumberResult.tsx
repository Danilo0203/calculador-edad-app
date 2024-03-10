export const NumberResult = ({ texto, result }: { texto: string; result: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className=" py-1 text-5xl font-black italic text-primaryPurple lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {(result = result ? result : `- -`)}
      </div>
      <p className="text-5xl font-black italic text-neutralOffBlack lg:text-6xl xl:text-7xl 2xl:text-8xl">{texto}</p>
    </div>
  );
};
