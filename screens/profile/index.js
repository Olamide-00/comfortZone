import { View, Text, Image } from 'react-native';
import React from 'react';
import { signOut, User } from 'firebase/auth';
import { Button } from 'react-native';
import { auth } from '../../config/firebase';
import { styles } from './style';
import { TouchableOpacity } from 'react-native';






export default function Profile() {


  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <View style={styles.root}>
      <View style={styles.headerBg}>
        <View style={styles.profilePicContainer}>
          <Image 
            source={require("../../assets/olamide.jpg")}
            style={styles.profilePic}
            resizeMode='contain'
          />
        </View>
      </View>
      <View style={styles.secondSection}>
        <View style={styles.nameContainer}> 
          <Text style={styles.name}>Hello {"Olamide"} </Text>
          <View>
            <Text> { auth.currentUser.email } </Text>
          </View>
        </View>
      </View>
      <View style={styles.thirdSection}>
        <TouchableOpacity style={styles.signOutContainer} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}