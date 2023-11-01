import { View, Text, TouchableOpacity , StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';










export default function Quantityselector({ quantity, setQuantity }) {

const onPlus = () => {
    setQuantity(quantity + 1)
}

const onMinus = () => {
    setQuantity(Math.max(1,quantity - 1))
}


  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.textContainer} onPress={onMinus}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>  { quantity } </Text>
      </View>
      <TouchableOpacity  style={styles.textContainer} onPress={onPlus}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    root: {
       flexDirection: "row",
       justifyContent: "center",
       alignItems: "center",
       width: wp(27),
       height: hp(5),
       borderWidth: 1,
       borderRadius: 8,
    },
    text: {
        fontSize: hp(4),
        marginHorizontal: wp(3),
        fontWeight: "800"
       
    },
    quantity:  {
        fontSize: hp(3),
        paddingHorizontal: wp(1),
    },
    quantityContainer: {
      borderWidth: 1,
      borderRadius: 8
    }
})