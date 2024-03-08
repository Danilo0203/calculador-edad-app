import { SubmitButtons, Label, Input } from "../ui/";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const añoActual = new Date().getFullYear();
  const datos = handleSubmit((data: object) => {
    console.log(data);
  });
  console.log(errors);
  return (
    <form onSubmit={datos}>
      <div className="flex w-full gap-5 md:w-4/5">
        <div className="w-full">
          <Label children="DÍA" htmlFor="dia" />
          <Input
            placeholder="DD"
            id="dia"
            type="number"
            onInput={(e) => {
              const inputElement = e.target as HTMLInputElement;
              inputElement.value = inputElement.value.slice(0, 2);
            }}
            {...register("dia", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              min: {
                value: 1,
                message: "Digito invalido",
              },
              validate: (value) => {
                return (value = value > 31 ? "Ingrese un día valido" : false);
              },
            })}
            autoComplete="off"
          />
          {errors.dia && (
            <span className="text-xs font-semibold italic text-red-500">
              {typeof errors.dia.message === "string" ? errors.dia.message : ""}
            </span>
          )}
        </div>
        <div className="w-full">
          <Label children="MES" htmlFor="mes" />
          <Input
            placeholder="MM"
            max={12}
            id="mes"
            min={1}
            type="number"
            onInput={(e) => {
              const inputElement = e.target as HTMLInputElement;
              inputElement.value = inputElement.value.slice(0, 2);
            }}
            {...register("mes", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              min: {
                value: 1,
                message: "Digito invalido",
              },

              validate: (value) => {
                return (value = value > 12 ? "Ingrese un mes valido" : false);
              },
            })}
            autoComplete="off"
          />
          {errors.mes && (
            <span className="text-xs font-semibold italic text-red-500">
              {typeof errors.mes.message === "string" ? errors.mes.message : ""}
            </span>
          )}
        </div>
        <div className="w-full">
          <Label children="AÑO" htmlFor="año" />
          <Input
            placeholder="AAAA"
            max={2100}
            id="año"
            min={1}
            type="number"
            onInput={(e) => {
              const inputElement = e.target as HTMLInputElement;
              inputElement.value = inputElement.value.slice(0, 4);
            }}
            {...register("año", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              min: {
                value: 1,
                message: "No valores negativos",
              },
              minLength: {
                value: 4,
                message: "Minimo cuatro digitos",
              },
              validate: (value) => {
                return value > añoActual ? `No mas de ${añoActual}` : false;
              },
            })}
            autoComplete="off"
          />
          {errors.año && (
            <span className="text-xs font-semibold italic text-red-500">
              {typeof errors.año.message === "string" ? errors.año.message : ""}
            </span>
          )}
        </div>
      </div>
      <SubmitButtons type="submit" />
    </form>
  );
};
