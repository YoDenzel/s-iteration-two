import { TOptionsArr } from '../../shared/types';

export type TFilterDataArr = {
  data: Array<TOptionsArr[] | undefined>;
  activeObjArr: Array<TOptionsArr | null>;
};
