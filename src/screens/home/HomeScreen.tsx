import React, { useEffect, useMemo } from "react";
import { View, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./HomeScreen.style";
import Header from "./components/Header";
import Category from "./components/Category";
import { getCategoryData } from "@services/api/Category";
import { IData, IProductItem } from "@services/models";
import {
  categoryDataAtom,
  dataListAtom,
} from "@services/storage/Atom";
import { useSetRecoilState } from "recoil";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const setCategoryList = useSetRecoilState(categoryDataAtom);
  const setDataList = useSetRecoilState<IData[]>(dataListAtom);

  const localData: IData[] = [];

  const getCategory = () => {
    getCategoryData().then((res) => {
      const shiftedData = res.data.categories.filter((item: string) => {
        return item !== "Any";
      });
      for (let i = 0; i < shiftedData.length; i++) {
        const data = {
          category_name: shiftedData[i],
          isExpanded: false,
          sub_category: [] as IProductItem[],
        };
        localData.push(data);
      }
      setDataList(localData);
      setCategoryList(shiftedData);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return <SafeAreaView style={styles.container}>{<Category />}</SafeAreaView>;
};

export default HomeScreen;
