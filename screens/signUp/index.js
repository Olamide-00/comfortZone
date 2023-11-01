import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useContext } from 'react'
import { styles } from './style'
import Header from '../../components/header'
import { Form } from '../../components/form/Form';
import { createUserWithEmailAndPassword, currenUser } from 'firebase/auth';


import { auth } from "../../config/firebase"
import { UserContext } from '../../context/UserContext';

export default function SignUp() {

  const {email, password} = useContext(UserContext);


  const handleSignUp = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
    } catch(error) {
      if(error.message.includes("auth/email-already-in-use")) {
        alert("Email Already used")
      } else if (error.message.includes("auth/weak-password")) {
        alert("Password is too weak")
      } else if (error.message.includes("auth/invalid-email")) {
        alert("Invalid Email  Address")
      } else {
        alert(error.message)
      }
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <View style={styles.root}>
        <Header title={"Signup"} />
        <View style={styles.formContainer}>
          <Form  title={ "SignUp" }  type={"reg"} onPress={handleSignUp} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}