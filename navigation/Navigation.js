import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged, User } from 'firebase/auth'

import Login from '../screens/login';
import SignUp from '../screens/signUp';
import Home from '../screens/home';
import { auth } from '../config/firebase';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import ProductPage from '../screens/product';

import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';






const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    )
}

function HomeTab() {
    return(
        <Tab.Navigator screenOptions={{ 
            headerShown: false,
            tabBarLabelStyle: {
                fontSize: hp(1.9)
            },
            tabBarStyle: {
                height: hp(8),
                borderTopColor: "gray",
            }
            }}>
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon:(() => (
                        <Ionicons name='menu' color="gray" size={30} />
                    )),
                }}
            />
            <Tab.Screen name='Cart' component={Cart} 
                options={{
                    tabBarIcon:(() => (
                        <Ionicons name='cart' size={30} color="gray" />
                    ))
                }}
            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: (() => (
                        <Ionicons name='person' size={30} color="gray" />
                    ))
                }}
            />
        </Tab.Navigator>
    )
}




export default function Navigation () {

    const [user, setUser] = useState(User || null);

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) =>
        setUser(user))
        return unsubscribe
        
    },[])
    return (
        <NavigationContainer>
           <Stack.Navigator screenOptions={{ headerShown: false}}>
                {
                    user? ( <Stack.Screen name='HomeTab' component={HomeTab} />) 
                    :
                     (<Stack.Screen name='AuthStack' component={AuthStack} />)
                }
                  <Stack.Screen name='ProductPage' component={ProductPage} />
           </Stack.Navigator>
        </NavigationContainer>
    )
} 