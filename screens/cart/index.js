import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react';
import cartData from '../../data/cartData';
import { styles } from './style';
import CartPage from '../../components/cartPage/cartPage';









export default function Cart() {
  return (
    <View style={styles.root}>
      <View style={styles.cartTextContainer}>
        <Text style={styles.cartText}>My Cart </Text>
      </View>
      <ScrollView>
      <CartPage />
      <CartPage />
      <CartPage />
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.text}> Item  Cost: </Text>
        
      
        {/* <Text style={styles.text}>Transportation: $80</Text>
        <Text style={styles.text}> Total Cost: $620</Text> */}
      </View>
    </View>
  )
}