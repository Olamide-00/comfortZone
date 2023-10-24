import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useContext } from 'react'
import { styles } from './style'
import Header from '../../components/header'
import { Form } from '../../components/form/Form';
import { createUserWithEmailAndPassword } from 'firebase/auth';


import { auth } from "../../config/firebase"
import { UserContext } from '../../context/UserContext';

export default function SignUp() {

  const {email, password} = useContext(UserContext);


  const handleSignUp = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
    } catch(error) {
      alert(error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <View style={styles.root}>
        <Header title={"Sign up"} />
        <View style={styles.formContainer}>
          <Form  title={ "SignUp" }  type={"reg"} onPress={handleSignUp} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}