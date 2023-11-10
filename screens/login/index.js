import { View, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { Form } from '../../components/form/Form';
import Header from '../../components/header';
import { UserContext } from '../../context/UserContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';





export default function Login() {

  const {email, password, isLoading, setIsLoading} = useContext(UserContext);

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
      if(error.message.includes("auth/invalid-login-credentials")) {
        alert("Invalid Email or Password")
      } else if (error.message.includes("auth/network-request-failed")) {
        alert("Network error")
      } else {
        alert(error.message)
      }
    }finally{
      setIsLoading(false)
    }
  }

  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <KeyboardAvoidingView behavior="padding"  style={styles.root} >
          <View>
              <Header title={"Login"} />
              <View style={styles.formContainer}>
                  <Form  title={ "Login" } onPress={handleSignIn} />
              </View>
          </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}