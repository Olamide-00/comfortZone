import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import { cartContext } from './context/cartContext/cartContext';



export default function App() {

  const [name, setName] = useState("");
  const  [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [cartItem, setCartItem] = useState(0);

  return (
    <cartContext.Provider value={{cartItem, setCartItem}}>
      <UserContext.Provider value={{
        name, setName,
        email, setEmail,
        password, setPassword,
        isLoading, setIsLoading
      }}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </UserContext.Provider>
    </cartContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
