import { View, Text, ScrollView ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { categories } from '../../data/data';
import { widthPercentageToDP as  wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';


export default function Categories() {

    const [activeCategory, setActiveCategory] = useState(categories[0]);


  return (
    <View>
        <View style={styles.categoriesTitleConntainer}>
            <Text style={styles.categoriesText}>Categories</Text>
        </View>
    <ScrollView 
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal
        >
            {
                categories.map((item, index) => {
                    let isActive = item == activeCategory;
                    let bg = isActive? (styles.active) : (null)
                    let color = isActive? (styles.activeColor) : (null)
                    
                    return(
                        <TouchableOpacity key={index} style={[styles.container,bg]} onPress={() => setActiveCategory(item)}>
                        <Text style={[styles.text, color]}> {item}</Text>
                        </TouchableOpacity>
                    )
                })
            }
    </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        marginTop: hp(0.8),
        marginHorizontal: wp(2)
    },
    text: {
        fontSize: hp(3),
        paddingHorizontal: wp(4),
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "gray"
    },
    categoriesTitleConntainer: {
        marginTop: hp(3),
        marginLeft: wp(3)
    },
    categoriesText:{
        fontSize: hp(3.5),
        fontWeight: "600"
    },
    active: {
        backgroundColor: "black",
        color: "#fff",
        borderRadius: 8
    },
    activeColor: {
        color: "#fff"
    }

})