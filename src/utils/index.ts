import { IData, IProductItem } from "@services/models";

export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const manipulateJokesData = (
  dataList: IData[],
  data: IData,
  jokes: IProductItem[],
  needExpand: boolean,
) => {
  const newList = [...dataList].map((item) => {
    if (item.category_name === data.category_name) {
      return {
        ...item,
        isExpanded: needExpand ? !item.isExpanded : item.isExpanded,
        sub_category: jokes,
        amount: needExpand ? data?.amount : data?.amount + 1,
      };
    } else return item;
  });
  return newList;
};

export const moveToTop = (
  array: IData[],
  newIndex: number,
  oldIndex: number,
) => {
  const arr = [...array];
  arr.splice(newIndex, 0, ...arr.splice(oldIndex, newIndex));
  return arr;
};
