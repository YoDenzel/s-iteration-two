import { TFilterDataArr } from './types';

export const filterDataArr = ({ data, activeObjArr }: TFilterDataArr) => {
  return [
    {
      title: 'Тариф',
      data: data[0],
      activeTitle: activeObjArr[0],
    },
    {
      title: 'Города',
      data: data[1],
      activeTitle: activeObjArr[1],
    },
    {
      title: 'Статус',
      data: data[2],
      activeTitle: activeObjArr[2],
    },
    {
      title: 'Машина',
      data: data[3],
      activeTitle: activeObjArr[3],
    },
  ];
};
