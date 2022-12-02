import { ViewStyle, StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
interface Style {
  container: ViewStyle;
  refresh: ViewStyle;
  contentContainer: ViewStyle;
  listContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    contentContainer: {
      flex: 1,
      marginTop: 16,
    },
    listContainer: {
      marginTop: 8,
    },
    refresh: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
  });
};
