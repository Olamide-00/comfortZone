import { View, Text, Image } from 'react-native'
import React from 'react';
import cartData from '../../data/cartData';
import { styles } from './style';









export default function CartPage() {
  return (
    <View style={styles.root}>
      <View style={styles.cartContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={cartData.image}
            style={styles.image}
          />
        </View>
        <View style={styles.cartDetails}>
          <View style={styles.cartInnerContainer}>
            <Text style={styles.name}> {cartData.name} </Text>
            <Text style={styles.description} numberOfLines={3} > {cartData.description} </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}> ${cartData.price} </Text>
              <Text style={styles.quantity}> Quantity: {1} </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}