import { IProductItem } from "@services/models";
import { JOKE, URL } from "@shared-constants";
import axios from "axios";

export const getJokesData = async (data: string) => {
  const fullUrl = `${URL}${JOKE}/${data}?type=single&amount=2`;
  const config = {
    credentials: "same-origin",
    mode: "no-cors",
    withCredentials: false,
  };
  const response = await axios.get<IProductItem[]>(fullUrl, config);
  return response.data;
};
