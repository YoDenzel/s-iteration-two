export type TAuthPage = {
  login: string;
  setLogin: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  authClickHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  errorMessage?: string;
};
