import { TCarsData } from '../../shared/types';

export type TCarCardLeftBlock = {
  data?: TCarsData;
  onImageChange: (v: React.ChangeEvent<HTMLInputElement>) => void;
  image: File | null;
  imageUrl: string;
  setDescriptionInputValue: (v: string) => void;
  progressBarPercent: number;
  carInputObj: {
    carModelInput: string;
    carTypeInput: string;
    carMinPrice: string | number;
    carMaxPrice: string | number;
    carNumber: string;
    carDescription: string;
  };
};
