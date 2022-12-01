import { ViewStyle, StyleSheet, ImageStyle} from "react-native";

interface Style {
  header: ViewStyle;
  profilePicImageStyle: ImageStyle;
  titleText: ViewStyle;
  shadowContainer: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    header: {
      marginTop: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: '100%',
      paddingHorizontal: 10
    },
   
    profilePicImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },

    titleText: {
      color: "black",
      fontWeight: 'bold',
      fontSize: 18,
      bottom: 0.5,
      paddingLeft: 12,
      width: '80%',
    },
    
    shadowContainer: {
      backgroundColor: 'white', 
      justifyContent: 'center',
      alignItems: 'center',
      width: '10%',
      height: 35,
      borderRadius: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    }
  });
};
