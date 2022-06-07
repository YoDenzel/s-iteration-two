import { TCarsData } from '../../shared/types';

export type TCarCardLeftBlock = {
  data?: TCarsData;
  onImageChange: (v: React.ChangeEvent<HTMLInputElement>) => void;
  image: File | null;
  imageUrl: string;
  descriptionInputValue: string;
  setDescriptionInputValue: (v: string) => void;
  progressBarPercent: number;
};
