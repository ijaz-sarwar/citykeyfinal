import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import MainImage from '../assets/Component3.png';
import LinearGradient from 'react-native-linear-gradient';

export default ForgetPass = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 30, paddingTop: 0 }}>
                <Image source={require('../assets/Component3.png')} />
                <View style={{ alignSelf: "flex-start", width: "100%", padding: 10, paddingTop: 30 }}>
                    <Text style={{ color: "grey", fontSize: 15, fontFamily: "Roboto", marginTop: 2, opacity: .8 }}>RECOVER YOUR PASSWORD</Text>
                    <Text style={{ fontSize: 12, opacity: .2 }}>Enter your Email address associated with Citikey account</Text>
                </View>
                <View style={{ width: Dimensions.get("screen").width - 40 }}>
                    <TextInput placeholder="Enter Your Email" placeholderTextColor="lightgrey" style={{ width: "100%", height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, paddingLeft: 20 }} />
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: "100%", height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 15 }}>Continue</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
} 