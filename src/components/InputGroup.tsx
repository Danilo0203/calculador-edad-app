import { SubmitButton } from "./SubmitButton";
import { LabelFecha } from "./LabelFecha";

export const InputGroup = () => {
  return (
    <form>
      <div className="flex md:w-4/5">
        <LabelFecha texto="DÍA" short="DD" max={31} />
        <LabelFecha texto="MES" short="MM" max={12} />
        <LabelFecha texto="AÑO" short="AAAA" max={2100} />
      </div>
      <SubmitButton />
    </form>
  );
};
