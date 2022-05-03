import { TFilterDataArr } from './types';

export const filterDataArr = ({
  data,
  activeObjArr,
  setActiveCitiesObj,
  setActiveRateObj,
  setActiveStatusObj,
  setActiveCarObj,
}: TFilterDataArr) => {
  return [
    {
      title: 'Тариф',
      data: data[0],
      activeTitle: activeObjArr[0],
      setActiveObj: setActiveRateObj,
    },
    {
      title: 'Города',
      data: data[1],
      activeTitle: activeObjArr[1],
      setActiveObj: setActiveCitiesObj,
    },
    {
      title: 'Статус',
      data: data[2],
      activeTitle: activeObjArr[2],
      setActiveObj: setActiveStatusObj,
    },
    {
      title: 'Машина',
      data: data[3],
      activeTitle: activeObjArr[3],
      setActiveObj: setActiveCarObj,
    },
  ];
};
