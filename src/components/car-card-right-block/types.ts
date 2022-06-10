import { TColorItem } from '../../redux/colors-checkbox-arr/types';
import {
  TCarCategoryData,
  TCarCategoryId,
  TCarInputObj,
} from '../../shared/types';

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
  createOrChangeCar: () => void;
  carCategoriesArr?: TCarCategoryId[];
  isCarTypeDropdownActive: boolean;
  setIsCarTypeDropdownActive: () => void;
  carDropdownInputRef: React.RefObject<HTMLUListElement>;
  setChoosedCarType: (v: TCarCategoryId) => void;
  setCarTypeInput: (v: string) => void;
  carTypeInput: string;
};

type TCarColorObj = {
  carColorInput: string;
  wrongColorErr: boolean;
};
