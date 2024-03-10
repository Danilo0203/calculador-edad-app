export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-2 py-2 text-center md:gap-5">
      <p className="text-[0.7rem] sm:text-xl lg:text-lg">
        Desafio por{" "}
        <b>
          <a href="https://www.frontendmentor.io/profile/Danilo0203" target="_blank">
            FrontMentor
          </a>
        </b>
        , Codigo por <b> Danilo Calderón</b>
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/Danilo0203/calculador-edad-app" target="_blank">
          <img src="assets/img/github.png" alt="logo github" className="hover:animate-pulsar w-5 md:w-6" />
        </a>
        <a href="https://www.linkedin.com/in/danilo-calderon/" target="_blank">
          <img
            src="assets/img/logotipo-de-linkedin.png"
            alt="logo linkedin"
            className="hover:animate-pulsar w-5 md:w-6"
          />
        </a>
      </div>
    </footer>
  );
};
