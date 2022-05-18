import { TOptionsArr } from '../../shared/types';

export type TOrdersFilterComponent = {
  filterDataArr: Array<TFilterDataArr>;
  submitHandler: (e: React.FormEvent<HTMLDivElement>) => void;
  cancelButtonClickhandler?: () => void;
};

type TFilterDataArr = {
  title: string;
  data?: TOptionsArr[];
  activeTitle: TOptionsArr | null;
};
