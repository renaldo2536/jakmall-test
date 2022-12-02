import React, { useMemo } from "react";
import { Alert, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import createStyles from "./index.style";
import { IProductItem } from "@services/models";
import { FlatList } from "react-native-gesture-handler";

type jokesProps = {
  data: IProductItem[];
  isExpanded: boolean;
};

const Jokes = (props: jokesProps) => {
  const { data, isExpanded } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(), [theme]);

  return (
    <FlatList
      contentContainerStyle={{
        flexDirection: "column",
      }}
      data={data}
      style={{ display: isExpanded ? "flex" : "none" }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <>
          <RNBounceable
            style={styles.shadowContainer}
            onPress={() => {
              Alert.alert(item.joke);
            }}
          >
            <Text style={{ color: "black" }}>{item.joke}</Text>
          </RNBounceable>
        </>
      )}
    />
  );
};

export default Jokes;
