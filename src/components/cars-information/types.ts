import { TCarsData } from '../../shared/types';

export type TCarsInformation = {
  carsData?: TCarsData[];
  isPrevPage: () => boolean;
  isNextPage: () => boolean;
  currentPage: number;
  setCurrrentPage: (v: number) => void;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
  paginationRange: (string | number)[] | undefined;
};
