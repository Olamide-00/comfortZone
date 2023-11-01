import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { topDealData } from "../../data/data";
import { FlashList } from "@shopify/flash-list";
import  { widthPercentageToDP as wp, heightPercentageToDP as  hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";




export default function TopDealCard() {

    const navigation = useNavigation();

    const renderItem = (({ item }) => {
        return(
            <TouchableOpacity style={styles.container}  onPress={() => navigation.navigate("ProductPage", {...item})} >
              <View style={styles.imgContainer}>
                <Image 
                    source={item.image}
                    style={styles.img}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}> {item.name} </Text>
                <Text style={[styles.text, styles.price]}> $ {item.price} </Text>
              </View>
            </TouchableOpacity>
        )
    })

    return(
        <FlatList  
            horizontal
            showsHorizontalScrollIndicator={false}
            data={topDealData}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: hp(-8),
        marginHorizontal: wp(3),
        width: wp(45),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 20,
        paddingVertical: 2
    },
    img: {
        width: wp(20),
        height: hp(30),
        resizeMode: "contain",
        borderRadius: 15
    },
    textContainer: {
        marginTop: hp(-6)
    },
    text: {
        fontSize: hp(2.2),
        fontWeight: "500",
    },
    price: {
        fontWeight: "800"
    }
    
})