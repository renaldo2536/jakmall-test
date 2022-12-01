import { IHiddenData, IProductItem, IData } from "@services/models";
import { atom } from "recoil";

export const categoryDataAtom = atom({
  key: "categoryAtom",
  default: [],
});

export const jokesListAtom = atom({
    key: "jokesListAtom",
    default: {} as IProductItem[],
});

export const dataListAtom = atom({
  key: "dataListAtom",
  default: {} as IData[],
});

export const hiddenIndexDataAtom = atom({
  key: "hiddenIndexData",
  default: {
    key: '',
    hidden: false,
  } as IHiddenData,
});
