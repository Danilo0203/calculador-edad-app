import { SubmitButton } from "../tipos";

export const SubmitButtons = (props: SubmitButton) => {
  return (
    <div className="relative my-16">
      <hr className="bg-neutralLightGrey p-[0.1px]" />
      <button
        className="absolute left-1/2 top-1/2 m-auto w-fit -translate-x-1/2 -translate-y-1/2 rounded-full bg-primaryPurple p-5 duration-300 hover:bg-neutralOffBlack md:right-0 md:mr-0 md:translate-x-0"
        {...props}
      >
        <img
          src="assets/img/icon-arrow.svg"
          alt="arrow icon"
          className="h-7 w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 2xl:h-1/4 2xl:w-14"
        />
      </button>
    </div>
  );
};
