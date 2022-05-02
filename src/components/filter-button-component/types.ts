import { TOptionsArr } from '../../shared/types';

export type TFilterButtonComponent = {
  optionsArr?: TOptionsArr[];
  buttonTitle: string;
  setObj: (v: TOptionsArr) => void;
  selectedOption?: string;
};
