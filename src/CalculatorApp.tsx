import { InputGroup } from "./components/InputGroup";
import { ResultGroup } from "./components/ResultGroup";

export const CalculatorApp = () => {
  return (
    <article className="min-w-full rounded-t-3xl rounded-bl-3xl rounded-br-[5rem] bg-neutralWhite px-4 py-12 md:flex md:flex-col md:px-10">
      <InputGroup />
      <section>
        <ResultGroup />
      </section>
    </article>
  );
};
