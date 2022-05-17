import { TCarOrderData } from '../../shared/types';

export type TOrderInformation = {
  activeOrderObj?: TCarOrderData;
  dateTo?: string;
  dateFrom?: string;
  isPrevPage: () => boolean;
  isNextPage: () => boolean;
  currentPage: number;
  setCurrrentPage: (v: number) => void;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
  paginationRange: (string | number)[] | undefined;
};
