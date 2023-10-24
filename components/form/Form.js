import { View,Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ActivityIndicator } from "react-native";

export function Form ({ title, type, onPress }) {
    const navigation = useNavigation();
    const {
        name, 
        setName, 
        email, 
        setEmail, 
        password, 
        setPassword,
        isLoading,
        setIsLoading
    
    } = useContext(UserContext);

    return(
        <KeyboardAvoidingView behavior="padding">
            { type? (<View style={styles.inputContainer}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput
                    placeholder="e.g John"
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>) : (null )
            
            }
            <View style={styles.inputContainer} >
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    placeholder="abc@gmail.com"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Password</Text>
                    <View style={styles.password}>
                        <TextInput
                            placeholder="*****"
                            style={styles.secureEntry}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry


                        />
                        <TouchableOpacity>
                            <Ionicons name="eye-off" size={25} color="black"  style={styles.icon} />
                        </TouchableOpacity>
                    </View>
            </View>
            <View>
               { 
               isLoading? (<ActivityIndicator size={40} color="gray" style={styles.activityIndicator} />) :
                (<TouchableOpacity style={styles.loginContainer} onPress={onPress} >
                    <Text style={styles.loginText}> { title } </Text>
                </TouchableOpacity>)
                }
            </View>
            {
                type? ( <View style={styles.createAccountContainer}>
                    <Text style={styles.createaccountText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} >
                        <Text style={styles.createaccountText2}>Login here</Text>
                    </TouchableOpacity>
                </View> ) : ( <View style={styles.createAccountContainer}>
                <Text style={styles.createaccountText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")} >
                    <Text style={styles.createaccountText2}>SignUp here</Text>
                </TouchableOpacity>
            </View> )
            }
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inputText: {
        fontSize: hp(2.3),
        fontWeight: "500",
        marginBottom: hp(1.2)
    },
    input: {
        width: wp(90),
        height: hp(7),
        backgroundColor: "#f5f5f5",
        borderRadius: 15,
        paddingLeft: wp(5)
    },
    inputContainer: {
        marginVertical: hp(0.4)
    },
    password: {
        width: wp(90),
        height: hp(7),
        backgroundColor: "#f5f5f5",
        borderRadius: 15,
        paddingLeft: wp(5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    icon: {
        paddingRight: wp(3)
    },
    secureEntry: {
        width: hp(30),
        height:hp(5)
    },
    loginContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        marginTop: hp(10),
        marginHorizontal: wp(5),
        paddingVertical: hp(2.5),
        borderRadius: 15
    },
    loginText: {
        color: "#fff",
        fontSize: hp(3),
        fontWeight: "700"
    },
    createAccountContainer: {
        marginTop: hp(5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    createaccountText: {
        fontSize: hp(2.4),
        color: "gray"
    },
    createaccountText2: {
        fontSize: hp(2.5),
        fontWeight: "600",
        color: "gray"
    },
    activityIndicator:  {
        marginVertical: hp(7)
    }
})