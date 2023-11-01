import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
    },
    cartTextContainer: {
        marginVertical: hp(3),
        alignItems: "center"
    },
    cartText: {
        fontSize: hp(3),
        fontWeight: "700",
        letterSpacing: 1
    },
    totalContainer: {
        flex: 1,
    },
    text: {
        fontSize: hp(3.5),
    }
  

})