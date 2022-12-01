import { CATEGORY, URL } from "@shared-constants";
import axios from "axios";

const fullUrl = URL + CATEGORY;

export const getCategoryData = async () => {
  const config = {
    credentials: "same-origin",
    mode: "no-cors",
    withCredentials: false,
  };
   let response = await axios.get(fullUrl, config);
   return response
};