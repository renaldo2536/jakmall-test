export interface ICategoryItem {
  alias: string;
  resolved: string;
}

export interface IProductItem {
  id: string;
  joke: string;
  category: string;
}

export interface IHiddenData {
  key: string;
  hidden: boolean;
}

export interface IData {
  isExpanded : boolean,
  category_name: string,
  sub_category: IProductItem[]
}