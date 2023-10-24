import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: hp(5),
        backgroundColor: "#fff"
    },
    formContainer: {
        marginTop: hp(7),
        marginLeft: wp(5)
    }
})