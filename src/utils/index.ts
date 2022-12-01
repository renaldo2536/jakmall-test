import { IData, IProductItem } from "@services/models";

export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const manipulateJokesData = (dataList: IData[], data: IData, jokes: IProductItem[]) => {
  let newList = [...dataList].map((item) => {
    if (item.category_name === data.category_name) {
      return { ...item, isExpanded: !item.isExpanded, sub_category: jokes };
    } else return item;
  });
  return newList;
}