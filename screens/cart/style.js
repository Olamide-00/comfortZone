import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
    },
    cartTextContainer: {
        marginVertical: hp(4),
        alignItems: "center"
    },
    cartText: {
        fontSize: hp(3),
        fontWeight: "700",
        letterSpacing: 1
    },
    totalContainer: {
        height: hp(30),
        backgroundColor: "#f5f5f5",
        paddingHorizontal: wp(3),
        paddingTop: hp(3)
    },
    text: {
        fontSize: hp(3.5),
    },
    cartItem: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cartItemName: {
        fontSize: hp(3.4),
        marginVertical: hp(0.8)
    },
    cartItemPrice: {
        fontSize: hp(3.5),
        fontWeight: "600",
        letterSpacing: 2
    },
    checkOutContainer: {
        justifyContent: "center",
        alignItems: "center",
        position:  "absolute",
        bottom: hp(2)
    },
    checkOut: {
        marginHorizontal: wp(17.5),
        borderWidth: hp(0.05),
        paddingHorizontal: wp(19),
        paddingVertical: hp(2),
        borderRadius: 15,
        backgroundColor: "#ffff"
    },
    checkOutText: {
        fontSize: hp(2.5),
        fontWeight: "700"
    },
    modalroot: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // height: hp(30),
        // width: wp(80)
    },
    modal: {
        // backgroundColor: "rgba(0,0,0,0.5)",
        // width: wp(80),
        // height: hp(50),
        // marginLeft: wp(20),
        // borderRadius: 20
    },
  

})