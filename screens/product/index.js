import { View, Text, Image, ScrollView,  TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Quantityselector from '../../components/quantitySelector/quantityselector';
import { topDealData } from '../../data/data';
import Favourite from '../../components/favourite/favourite';
import AddCart from '../../components/addCart/addCart';
import { styles } from './style'








export default function ProductPage({ route, navigation }) {

    const {name, price, image,images, description} = route.params;
    const [quantity, setQuantity] = useState(1);


  return (
    <View style={styles.root}>
        <View>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={25} color="gray" style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Product Details</Text>
                </View>
            </View>
            <View  style={styles.imageContainer}>
               <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
               >
               {
                images.map(( item, index ) => {
                    return(
                        <Image 
                        key={index}
                            source={ item }
                            style={styles.image}
                        />
                    )
                })
               }
               </ScrollView>
               <View>
               </View>
            </View>
        </View>
        <View style={styles.detailsContainer}>
            <View>
                <Text style={styles.name}> {name} </Text>
                <Text style={styles.price}> ${price} </Text>
                <Text numberOfLines={4} style={styles.description}>{ description } </Text>
            </View>
            <View style={styles.quantitySelector}>
              <Quantityselector quantity={quantity} setQuantity={setQuantity} />
            </View>
        </View>
        <View>
            <View style={styles.addCartInnerContainer}>
                <View>
                    <Favourite />
                </View>
                <View>
                    <AddCart />
                </View>
            </View>
        </View>
    </View>
  )
}