import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';









export default function Header ({ title }) {
  return (
        <View>
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}> { title } </Text>
            </View>
            <View style={styles.signInOptionContainer}>
                <Text style={styles.signInOptionText}>{title} with one of the following options </Text>
                <View style={styles.iconContainer}>
                    <Ionicons name='logo-google' color="black" size={25} style={styles.icon} />
                    <Ionicons name='logo-apple' color="black" size={25} style={styles.icon} />
                </View>
            </View>
        </View>
  )
}


const styles = StyleSheet.create({
    loginTextContainer: {
        alignItems: "center",
    },
    loginText: {
        fontSize: hp(5),
        fontWeight: "600"
    },
    signInOptionContainer: {
        alignItems: "center",
        marginTop: hp(2)
    },
    signInOptionText: {
        fontSize: hp(2.2),
        fontWeight: "400",
        letterSpacing: hp(0.1),
    },
    iconContainer: {
        flexDirection: "row",
        marginTop: hp(2),
    },
    icon: {
        backgroundColor: "#f5f5f5",
        marginHorizontal: hp(2),
        paddingHorizontal: wp(15),
        paddingVertical: hp(1.5),
        borderRadius: 10,
        overflow: "hidden"
    },
})