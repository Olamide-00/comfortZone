import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    }, 
    headerBg: {
        backgroundColor: "black",
        width: wp(100),
        height: hp(50),
        justifyContent: "center",
        alignItems: "center",
        paddingTop: hp(3)   
    },
    profilePic: {
        width: wp(40),
        height: hp(40),
        borderRadius: 100
    },
    profilePicContainer: {
        // borderWidth: 10,
        // borderColor: "#fff",
        // borderRadius: 500,
    },
    secondSection: {
        marginHorizontal: wp(3)
     },
    nameContainer: {
        marginTop: hp(5)
    },
    name: {
        fontSize: hp(4),
        fontWeight: "700",
        letterSpacing: 1
    },
    signOutContainer: {
        borderWidth: hp(0.04),
        justifyContent: "center",
        alignItems: "center",
        width: wp(50),
        height: hp(5),
        borderRadius: 10
    },
    signOutText: {
        fontSize: hp(3),
        fontWeight: "800"
    },
    thirdSection: {
        alignItems: "center",
        position: "absolute",
        bottom:  hp(4),
        marginHorizontal: hp(15)
    }
})