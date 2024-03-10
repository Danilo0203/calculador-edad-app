export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
}
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  error: boolean;
}
export interface SubmitButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export interface Fecha {
  dia: string;
  mes: string;
  año: string;
}
export interface TipoData {
  data: Fecha;
}
export interface SetCalFechasType {
  setCalFechas: (data: TipoData) => void;
}
