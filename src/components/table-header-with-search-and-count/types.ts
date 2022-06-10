export type TTableHeaderWithSearchAndCount = {
  count?: number;
  inputValue: string;
  setInputValue: (v: string) => void;
  placeholder: string;
  title: string;
};
