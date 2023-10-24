import { View, Text,  FlatList,TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'
import { topDealData } from '../../data/data';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export default function MainCard() {


    const renderItem = (({ item }) => {
        return(
            <TouchableOpacity style={styles.mainContainer} >
                <View style={styles.imageContainer}>
                    <Image 
                        source={item.image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}> { item.name} </Text>
                    <View style={styles.details}>
                       <View>
                            <Text style={styles.remark}>{item.remark}</Text>
                            <Text style={styles.price}> ${item.price}</Text>
                       </View>
                       <TouchableOpacity>
                        <Ionicons name='add-circle' color="black" size={25} />
                       </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    })

  return (
    <FlatList 
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={topDealData}
        renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: wp(2.8),
        width: wp(10),
        height: hp(28),
        borderWidth: 0.3,
        flex: 1,
        marginVertical: hp(1),
        borderRadius: 15,
        backgroundColor: "#f5f5f5",
        borderColor: "gray",
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
     },
    image: {
        width: wp(25),
        height: hp(20),
        resizeMode: "contain",
        position: 'absolute',
        top: hp(-2)
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name: {
        fontSize: hp(2.1),
        fontWeight: "700"
    },
    remark: {
        fontSize: hp(2),
        fontWeight: "600"
    },
    price: {
        fontSize: hp(2.8),
        fontWeight: "800"
    },
    detailsContainer: {
        position: 'absolute',
        bottom: hp(1),
        paddingHorizontal: hp(0.8)
    }

})