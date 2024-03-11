import { Toaster, toast } from "sonner";
import { SetCalFechasType } from "../tipos";
import { SubmitButtons, Label, Input } from "../ui/";
import { useForm } from "react-hook-form";
import { format } from "@formkit/tempo";

export const Form = ({ setCalFechas }: SetCalFechasType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const date = new Date();
  const añoActual = date.getFullYear();

  const onSubmit = handleSubmit((data) => {
    const { dia, mes, año } = data;
    const fechaRecibida = new Date(`${mes}-${dia}-${año}`);
    const fechaActual = date;

    if (fechaRecibida > fechaActual) {
      setCalFechas({ data: { dia: "", mes: "", año: "" } });
      toast.error(
        <div className="flex items-center justify-center gap-2">
          <div className="text-xl">🚩</div>
          <p className="text-sm font-semibold">
            No puede ingresar una <b>FECHA</b> mayor de <b> {format(date, "medium")}</b>
          </p>
        </div>,
      );
      return;
    }
    setCalFechas({ data: { año, dia, mes } });
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex w-full gap-5 md:w-4/5">
        <div className="w-full">
          <Label children="DÍA" htmlFor="dia" error={errors.dia ? true : false} />
          <Input
            error={errors.dia ? true : false}
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
                return (value = value > 31 ? "Ingrese un día valido" : undefined);
              },
            })}
            autoComplete="off"
          />
          {errors.dia && (
            <p className="pt-1 text-[0.6rem] font-semibold italic leading-3 text-red-500 md:text-[0.7rem] 2xl:text-sm">
              {typeof errors.dia.message === "string" ? errors.dia.message : ""}
            </p>
          )}
        </div>
        <div className="w-full">
          <Label children="MES" htmlFor="mes" error={errors.mes ? true : false} />
          <Input
            error={errors.mes ? true : false}
            placeholder="MM"
            id="mes"
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
                return (value = value > 12 ? "Ingrese un mes valido" : undefined);
              },
            })}
            autoComplete="off"
          />
          {errors.mes && (
            <p className="pt-1 text-[0.6rem] font-semibold italic leading-3 text-red-500 md:text-[0.7rem] 2xl:text-sm">
              {typeof errors.mes.message === "string" ? errors.mes.message : ""}
            </p>
          )}
        </div>
        <div className="w-full">
          <Label children="AÑO" htmlFor="año" error={errors.año ? true : false} />
          <Input
            error={errors.año ? true : false}
            placeholder="AAAA"
            max={2100}
            id="año"
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
                return value > añoActual ? `Máxmimo ${añoActual}` : undefined;
              },
            })}
            autoComplete="off"
          />
          {errors.año && (
            <p className="pt-1 text-[0.6rem] font-semibold italic leading-3 text-red-500 md:text-[0.7rem] 2xl:text-sm">
              {typeof errors.año.message === "string" ? errors.año.message : ""}
            </p>
          )}
        </div>
      </div>
      <SubmitButtons type="submit" />
      <Toaster position="top-center" duration={3000} richColors />
    </form>
  );
};
