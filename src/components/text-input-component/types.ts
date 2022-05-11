export type TTextInputComponent = {
  title: string;
  value: string;
  setValue: (v: string) => void;
  placeholder: string;
  type: string;
  errorMessage?: string;
};
