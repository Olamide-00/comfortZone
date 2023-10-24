import { View, Text } from 'react-native'
import React from 'react';
import { signOut } from 'firebase/auth'
import { Button } from 'react-native';
import { auth } from '../../config/firebase';

export default function Profile() {


  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <View>
      <Text>Index</Text>
      <Text>Index</Text>
      <Button  title='SignOut' onPress={handleSignOut}/>
    </View>
  )
}