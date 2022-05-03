import { TOptionsArr } from '../../types';

export type TFilterDataArr = {
  data: Array<TOptionsArr[] | undefined>;
  activeObjArr: Array<TOptionsArr | null>;
  setActiveRateObj: (v: TOptionsArr | null) => void;
  setActiveCitiesObj: (v: TOptionsArr | null) => void;
  setActiveStatusObj: (v: TOptionsArr | null) => void;
  setActiveCarObj: (v: TOptionsArr | null) => void;
};
