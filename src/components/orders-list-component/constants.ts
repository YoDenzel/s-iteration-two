import { TFilterDataArr } from './types';

export const PAGE_LIMIT = 1;

export const filterDataArr = ({ data, activeObjArr }: TFilterDataArr) => {
  return [
    {
      title: 'Тариф',
      data: data[0]?.filter(val => val.name !== undefined),
      activeTitle: activeObjArr[0],
    },
    {
      title: 'Города',
      data: data[1]?.filter(val => val.name !== undefined),
      activeTitle: activeObjArr[1],
    },
    {
      title: 'Статус',
      data: data[2]?.filter(val => val.name !== undefined),
      activeTitle: activeObjArr[2],
    },
    {
      title: 'Машина',
      data: data[3]?.filter(val => val.name !== undefined),
      activeTitle: activeObjArr[3],
    },
  ];
};
