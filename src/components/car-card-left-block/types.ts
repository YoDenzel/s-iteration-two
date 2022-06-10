import { TCarInputObj, TCarsData } from '../../shared/types';

export type TCarCardLeftBlock = {
  data?: TCarsData;
  onImageChange: (v: React.ChangeEvent<HTMLInputElement>) => void;
  image: File | null;
  imageUrl: string;
  setDescriptionInputValue: (v: string) => void;
  progressBarPercent: number;
  carInputObj: TCarInputObj;
};
