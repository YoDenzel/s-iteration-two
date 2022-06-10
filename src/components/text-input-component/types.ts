export type TTextInputComponent = {
  title: string;
  value: string | number | null;
  setValue: (v: string) => void;
  placeholder: string;
  type: string;
  errorMessage?: string;
  flex?: string;
  maxLength?: number;
  onInputClick?: () => void;
};
