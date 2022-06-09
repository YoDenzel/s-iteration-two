import { TColorItem } from '../../redux/colors-checkbox-arr/types';
import { TCarInputObj } from '../../shared/types';

export type TCarCardRightBlock = {
  cancelChangesButtonClickhandler: () => void;
  deleteCarButtonClickhandler: () => void;
  colorCheckboxClickhandler: (v: string) => void;
  setColorClickhandler: () => void;
  carInputObj: TCarInputObj;
  setCarInputObj: (v: TCarInputObj) => void;
  colorsCheckboxArr: TColorItem[];
  carColorObj: TCarColorObj;
  setCarColorObj: (v: TCarColorObj) => void;
};

type TCarColorObj = {
  carColorInput: string;
  wrongColorErr: boolean;
};
