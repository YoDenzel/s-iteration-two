export type TAuthPage = {
  login: string;
  setLogin: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  authClickHandler: () => void;
};
