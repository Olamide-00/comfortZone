import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react';
import cartData from '../../data/cartData';
import { styles } from './style';
import CartPage from '../../components/cartPage/cartPage';
import PaymentPage from '../../components/paymentPage/paymentPage';






export default function Cart() {

  const [visible, setVisible] =useState(false);

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
        <View style={styles.cartItem}>
          <Text style={styles.cartItemName}>Total Item:</Text>
          <Text style={styles.cartItemPrice}>$1520</Text>
        </View>
        <View style={styles.cartItem}>
          <Text style={styles.cartItemName}>Transportation: </Text>
          <Text style={styles.cartItemPrice}>$96</Text>
        </View>
        <View style={styles.cartItem}>
          <Text style={styles.cartItemName}>Total Cost: </Text>
          <Text style={styles.cartItemPrice}>$2460</Text>
        </View>
          <View style={styles.checkOutContainer}>
          <TouchableOpacity style={styles.checkOut} onPress={() => setVisible(true)} >
            <Text style={styles.checkOutText}>CheckOut</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Modal
          visible={visible}
          animationType='slide'
        >
          <View>
            <PaymentPage />
          </View>
        </Modal>
      </View>
    </View>
  )
}