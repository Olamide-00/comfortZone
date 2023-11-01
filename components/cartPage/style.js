import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        paddingHorizontal: wp(3)
    },
    image: { 
        height: hp(25),
        width: wp(35),
        resizeMode: "contain",
        marginTop: hp(3)
    },
    imageContainer: { 

        height: hp(35),
        width: wp(40)
    },
    cartContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: wp(0.1),
        borderRadius: 8,
        height: hp(18),
        marginVertical: hp(0.6)
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: wp(3)
    },
    cartDetails: {
        borderLeftWidth: wp(0.2),
        height: hp(18),
        justifyContent: "center",
    },
    name: {
        fontSize: hp(2.5),
        fontWeight: "700"
    },
    cartInnerContainer: {
        marginHorizontal: wp(3),
        width: wp(50)
    },
    description: {
        lineHeight: hp(3),
        marginVertical: hp(1)
    },
    price: {
        fontSize: hp(2.5),
        fontWeight: '900'
    },
    quantity: {
        fontSize: hp(2.5),
        fontWeight: "00"
    },
    

})