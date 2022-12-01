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
      backgroundColor: "white",
      borderRadius: 5,
      marginHorizontal: 7,
      padding: 30,
      borderWidth: 1,
      borderColor: 'white',
      marginBottom: 5,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.17,
      shadowRadius: 3.05,
      elevation: 4,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  });
};
