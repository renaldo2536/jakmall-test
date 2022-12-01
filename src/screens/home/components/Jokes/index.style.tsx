import { ViewStyle, StyleSheet, ImageStyle } from "react-native";

interface Style {
  header: ViewStyle;
  profilePicImageStyle: ImageStyle;
  titleText: ViewStyle;
  shadowContainer: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 25,
    },

    profilePicImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },

    titleText: {
      color: "black",
      fontWeight: "bold",
      fontSize: 18,
      bottom: 0.5,
      paddingLeft: 12,
      width: "80%",
    },

    shadowContainer: {
      backgroundColor: "rgba(210, 215, 211, 1)",
      marginHorizontal: 7,
      padding: 30,
      width: '93%',
      alignSelf: 'center',
      marginBottom: 2,
    },
  });
};
