import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { UserContext } from './context/UserContext';
import { useState } from 'react';




export default function App() {

  const [name, setName] = useState("");
  const  [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
