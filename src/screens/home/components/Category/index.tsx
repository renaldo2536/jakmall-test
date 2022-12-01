import React, { useMemo, useState } from "react";
import { SectionList, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import createStyles from "./index.style";
import { FlatList } from "react-native-gesture-handler";
import {
  categoryDataAtom,
  dataListAtom,
  hiddenIndexDataAtom,
  jokesListAtom,
} from "@services/storage/Atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Icon from "react-native-dynamic-vector-icons";
import Jokes from "../Jokes";
import { getJokesData } from "@services/api/Jokes";
import { IData, IProductItem } from "@services/models";
import { manipulateJokesData } from "utils";

interface HomeScreenProps {}

const Category: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(), [theme]);
  const [dataList, setDataList] = useRecoilState(dataListAtom);

  const onPressCategory = async (data: IData) => {
    const jokesResponse = await getJokesData(data.category_name).then((res) => {
      const { jokes } = res;
      return jokes as IProductItem[];
    });
    const newList = manipulateJokesData(dataList, data, jokesResponse)
    setDataList(newList)
  };

  const Content = () => {
    return (
      <FlatList
        contentContainerStyle={{
          flexDirection: "column",
        }}
        style={{ paddingVertical: 15 }}
        data={dataList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <React.Fragment>
              <RNBounceable
                style={styles.shadowContainer}
                onPress={() => onPressCategory(item)}
              >
                <Text style={{ color: "black" }}>{`${index + 1}     ${
                  item.category_name
                }`}</Text>
                <Icon
                  name="caret-down-outline"
                  type="Ionicons"
                  color="black"
                  size={20}
                />
              </RNBounceable>
              <View>
                <Jokes data={item?.sub_category} isExpanded={item?.isExpanded}/>
              </View>
            </React.Fragment>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.header}>
      <Content />
    </View>
  );
};

export default Category;
