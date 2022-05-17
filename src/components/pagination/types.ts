export type TPagination = {
  currentPage: number;
  setCurrentPage: (v: number) => void;
  paginationRange: (string | number)[] | undefined;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
  isPrevPage: () => boolean;
  isNextPage: () => boolean;
};
