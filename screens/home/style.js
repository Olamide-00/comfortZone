import { StyleSheet } from "react-native";
import  { widthPercentageToDP as  wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export const styles = StyleSheet.create({
    root: {
        flex:  1,
        backgroundColor: "#f5f5f5",
        paddingTop: hp(3)
    },
    profileIcon: {
        width: 50 ,
        height: 50,
        resizeMode: "contain",
        borderRadius: 100,
        marginLeft: wp(3),
        marginRight: wp(3),
        borderWidth: 1,
        borderColor: "gray"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileName: {
        fontSize: hp(3.5),
        fontWeight: "600",
        letterSpacing: 1
    },
    searchContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#d1d1d1",
        width: wp(70),
        paddingVertical: hp(1),
        paddingLeft: wp(2),
        borderRadius: 15
    },
    searchMainContainer: {
        flexDirection: "row",
        marginHorizontal: hp(3),
        marginTop: hp(3)
    },
    searchIcon:{
        marginRight: wp(5)
    },
    input: {
        width: wp(60)
    },
    filterContainer: {
        marginLeft: wp(3),
        backgroundColor: "black",
        justifyContent: "center",
        paddingHorizontal: wp(6),
        borderRadius: 15
    },
    topDealContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: wp(3),
        marginTop:hp(5),
        marginBottom: hp(1)
    },
    topDealText: {
        fontSize: hp(3),
        fontWeight: "600"
    },
    mainCard: {
      marginTop: hp(1)
    }
})