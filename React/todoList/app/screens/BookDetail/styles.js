import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
    },
    divider: {
      height: 1,
      backgroundColor: "white"
    },
    bodyContent:{
      flexDirection: 'row',
      justifyContent : 'center',
      alignItems: 'center',
      marginTop: 30
    },
    image : {
       height: 120,
       width: 120
      },
    info: {
        margin: 10
    }
  })

  export default styles;