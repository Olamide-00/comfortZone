import { View, Text,  Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import TopDealCard from '../../components/cards/topDealCard';
import Categories from '../../components/category/categories';
import MainCard from '../../components/cards/mainCard';
import { ScrollView } from 'react-native-gesture-handler';
import { cartContext } from '../../context/cartContext/cartContext';








export default function Home() {

  const {cartItem, setCartItem } = useContext(cartContext);


  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View>
          <Image 
            source={require("./../../assets/olamide.jpg")}
            style={styles.profileIcon}
          />
        </View>
        <View>
          <Text style={styles.profileName}>Welcome Olamide</Text>
        </View>
      </View>
      <View style={styles.searchMainContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name='search' size={25} color="gray" style={styles.searchIcon} />
          <TextInput placeholder='Search' style={styles.input} />
        </View>
        <View style={styles.filterContainer}>
          <Ionicons name='filter-sharp' size={28} color="gray" />
        </View>
      </View>
      <View style={styles.topDealContainer}>
        <Text style={styles.topDealText}>Top deals for you</Text>
        <TouchableOpacity>
          <Text style={styles.topDealText}>see more</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TopDealCard  />
      </View>
      <View>
        <Categories />
      </View>
      <ScrollView style={styles.mainCard}>
        <MainCard />
      </ScrollView>
    </View>
  )  
}