export interface IProductItem {
  id: string;
  joke: string;
  category: string;
}

export interface IData {
  isExpanded: boolean;
  category_name: string;
  sub_category: IProductItem[];
  amount: number;
}
