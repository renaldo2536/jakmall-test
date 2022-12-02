import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import createStyles from "./index.style";
import { FlatList } from "react-native-gesture-handler";
import { amountAtom, dataListAtom } from "@services/storage/Atom";
import { useRecoilState } from "recoil";
import Icon from "react-native-dynamic-vector-icons";
import Jokes from "../Jokes";
import { getJokesData } from "@services/api/Jokes";
import { IData } from "@services/models";
import { manipulateJokesData, moveToTop } from "utils";

interface HomeScreenProps {}

const Category: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(), [theme]);
  const [dataList, setDataList] = useRecoilState(dataListAtom);

  const onPressCategory = async (data: IData) => {
    const { category_name, amount } = data;
    const jokesResponse = await getJokesData(category_name, amount).then(
      (res) => {
        //@ts-ignore
        const { jokes } = res;
        return jokes;
      },
    );
    const newList = manipulateJokesData(dataList, data, jokesResponse, true);
    setDataList(newList);
  };

  const addMoreItem = async (data: IData) => {
    const { category_name, amount } = data;
    const jokesResponse = await getJokesData(category_name, amount + 1).then(
      (res) => {
        //@ts-ignore
        const { jokes } = res;
        return jokes;
      },
    );
    const newList = manipulateJokesData(dataList, data, jokesResponse, false);
    setDataList(newList);
  };

  const moveArrayToTop = (index: number) => {
    const newData = moveToTop(dataList, index, 0);
    setDataList(newData);
  };

  const Content = () => {
    return (
      <FlatList
        contentContainerStyle={{
          flexDirection: "column",
        }}
        style={{ paddingVertical: 15, height: 550 }}
        data={dataList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const categoryString = `${index + 1}     ${item.category_name}`;
          const { sub_category } = item;
          return (
            <React.Fragment>
              <RNBounceable
                style={styles.shadowContainer}
                onPress={() => onPressCategory(item)}
              >
                <Text style={{ color: "black", width: "40%" }}>
                  {categoryString}
                </Text>
                <View style={{ width: "30%" }}>
                  {index === 0 && <Text style={styles.topText}>TOP</Text>}
                  <RNBounceable onPress={() => moveArrayToTop(index)}>
                    {index !== 0 && (
                      <Text style={styles.notTopText}>GO TOP</Text>
                    )}
                  </RNBounceable>
                </View>

                <Icon
                  name="caret-down-outline"
                  type="Ionicons"
                  color="black"
                  size={20}
                />
              </RNBounceable>
              <Jokes data={sub_category} isExpanded={item?.isExpanded} />
              {sub_category?.length < 4 && item?.isExpanded && (
                <RNBounceable
                  style={styles.addMoreItem}
                  onPress={() => addMoreItem(item)}
                >
                  <Text style={styles.addMoreItemText}>
                    Add more Items
                  </Text>
                </RNBounceable>
              )}
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
