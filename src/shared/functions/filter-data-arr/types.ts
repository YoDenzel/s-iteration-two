import { TOptionsArr } from '../../types';

export type TFilterDataArr = {
  data: Array<TOptionsArr[] | undefined>;
  activeObjArr: Array<TOptionsArr | null>;
};
