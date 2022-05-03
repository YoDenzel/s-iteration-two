import { TOptionsArr } from '../../shared/types';

export type TFilterButtonComponent = {
  optionsArr?: TOptionsArr[];
  buttonTitle: string;
  selectedOption?: string;
  activeIndex: number;
};
