import { IData } from "@services/models";
import { atom } from "recoil";

export const categoryDataAtom = atom({
  key: "categoryAtom",
  default: [],
});

export const dataListAtom = atom({
  key: "dataListAtom",
  default: {} as IData[],
});

export const amountAtom = atom({
  key: "amountAtom",
  default: 3,
});

