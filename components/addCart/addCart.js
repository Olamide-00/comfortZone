import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'




export default function AddCart() {
  return (
    <TouchableOpacity 
    style={{
        backgroundColor: "#F5F5F5",
        paddingHorizontal: wp(20),
        paddingVertical: hp(3),
        borderRadius: 10
    
    
    }}>
      <Text style={{
        fontSize: hp(3),
        fontWeight: "700"
      }}>Add To Cart</Text>
    </TouchableOpacity>
  )
}