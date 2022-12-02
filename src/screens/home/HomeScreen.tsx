import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./HomeScreen.style";
import Category from "./components/Category";
import { getCategoryData } from "@services/api/Category";
import { IData, IProductItem } from "@services/models";
import { categoryDataAtom, dataListAtom } from "@services/storage/Atom";
import { useSetRecoilState } from "recoil";
import Text from "@shared-components/text-wrapper/TextWrapper";
import Icon from "react-native-dynamic-vector-icons";
import { View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const setCategoryList = useSetRecoilState(categoryDataAtom);
  const setDataList = useSetRecoilState<IData[]>(dataListAtom);
  const [refresh, setRefresh] = useState(false);

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
          amount: 2,
        };
        localData.push(data);
      }
      setDataList(localData);
      setCategoryList(shiftedData);
    });
  };

  useEffect(() => {
    getCategory();
  }, [refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <Text h1 color="black" style={{ marginTop: 30 }}>
        Jakmall Test
      </Text>
      <RNBounceable
        style={styles.refresh}
        onPress={() => setRefresh(!refresh)}
      >
        <Icon name="refresh-outline" type="Ionicons" color="black" size={25} />
      </RNBounceable>

      <Category />
    </SafeAreaView>
  );
};

export default HomeScreen;
