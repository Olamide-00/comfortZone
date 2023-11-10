import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export const styles = StyleSheet.create({
    root: { 
        paddingTop:  hp(2),
        backgroundColor: "#fff",
        paddingHorizontal: wp(3),
        flex: 1,
        backgroundColor:  "#fff"
    },
    imageContainer: {
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        height: hp(45),
        width: wp(93),
        borderRadius: 15
    },
    image: {
        width: wp(90),
        height: hp(40),
        resizeMode: "contain",
        marginTop: hp(4),
        paddingBottom: hp(2),
     },
    headerContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: hp(2)
    },
    arrowContainer: {
        backgroundColor: "#f5f5f5",
        paddingHorizontal: wp(3),
        paddingVertical: hp(1),
        borderRadius: 10
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    headerText: {
        fontSize: hp(3),
        fontWeight: "700"
    },
    detailsContainer: {
        marginTop: hp(3)
    },
    name: {
        fontSize: hp(3.2 ),
        fontWeight: "600",
    },
    price: {
        fontSize: hp(4),
        fontWeight: "700",
        marginVertical: hp(1)
    },
    description: {
        fontSize: hp(2.5),
        fontWeight: "400",
        lineHeight: hp(3.2),
        letterSpacing: 1
    },
    addCartInnerContainer: {
      flexDirection: 'row',
      position: 'relative',
      justifyContent: 'space-between',
      marginVertical: hp(2),
      alignItems: "center"
    },
    quantitySelector: {
        marginVertical: hp(1),
        position: 'relative',
        right: wp(-68)
    }

})