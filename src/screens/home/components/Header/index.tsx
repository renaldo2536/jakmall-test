import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
import createStyles from "./index.style";

interface HomeScreenProps {}

const Header: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(), [theme]);

  const BackIcon = () => (
    <RNBounceable style={styles.shadowContainer}>
      <Icon
        name="arrow-back-outline"
        type="Ionicons"
        color={colors.iconBlack}
        size={25}
      />
    </RNBounceable>
  );

  const OptionIcon = () => (
    <RNBounceable style={styles.shadowContainer}>
      <Icon
        name="options-outline"
        type="Ionicons"
        color={colors.iconBlack}
        size={25}
      />
    </RNBounceable>
  );

  const Content = () => (
    <View style={{ flexDirection: "row", alignItems: "center"}}>
      <BackIcon />
      <Text style={styles.titleText}>Shoes</Text>
      <OptionIcon />
    </View>
  );

  return (
    <View style={styles.header}>
      <Content />
    </View>
  );
};

export default Header;
