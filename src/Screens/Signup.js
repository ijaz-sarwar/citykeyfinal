import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default Signup = ({ navigation }) => {

    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhoneNo] = useState();
    const [password, setPassword] = useState();
    const [confirm_password, setConf_Password] = useState();

    const UserSignup = async () => {
        if (username !== undefined && username !== "" && email !== undefined && email !== "" &&
            phone !== undefined && phone !== "" && password !== undefined && password !== "" && confirm_password !== undefined && confirm_password !== "") {
            if (password === confirm_password) {

                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                        database().ref("users/" + user.user.uid).set({
                            username: username,
                            PaymentClear: false,
                            email: email,
                            phone: phone,
                            uid: user.user.uid
                        }).then(() => {
                            console.log("done")
                            console.log('User account created & signed in!');
                            alert('User account created & signed in!');
                            navigation.navigate("PaymentMethod")
                        })
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            console.log('That email address is already in use!');
                            alert('That email address is already in use!');
                        }

                        if (error.code === 'auth/invalid-email') {
                            console.log('That email address is invalid!');
                            alert('That email address is invalid!');
                        }

                        console.error(error);
                    });
            }

        }
    }


    return (
        <LinearGradient colors={['#D51B2E', '#6C1381', '#110CC9']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={{ flex: 1 }}>
            <Image source={require("../assets/Ellipse.png")} style={{ position: "absolute", top: -140, left: -130 }} />
            <Image source={require("../assets/Path.png")} style={{ position: "absolute", right: -60, top: "-3%" }} />
            <Image source={require("../assets/Group46.png")} style={{ position: "absolute", top: "5%", right: "20%", opacity: .7 }} />
            <Image source={require("../assets/Group45.png")} style={{ position: "absolute", right: "15%", top: "22%", opacity: .7 }} />
            <Image source={require("../assets/Group52.png")} style={{ position: "absolute", left: "15%", top: "18%", opacity: .7 }} />
            <View style={{ alignItems: "center" }}>
                <View style={{ height: "24%", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../assets/whitelogo.png")} />
                </View>

                <View style={{ width: Dimensions.get("screen").width, height: "80%", backgroundColor: "white", borderTopRightRadius: 50, borderTopLeftRadius: 60, padding: 10 }}>
                    <View style={{ padding: 20, paddingLeft: 10, paddingTop: 30 }}>
                        <Text style={{ color: "black", opacity: .5 }}>CREATE AN ACCOUNT</Text>
                        <Text style={{ color: "grey", opacity: .5, fontSize: 13 }}>Start your advertisement with us</Text>
                    </View>

                    <View style={{ alignItems: "center" }}>

                        <TextInput placeholder="Full Name" onChangeText={val => setUserName(val)} style={{ width: "95%", height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", paddingLeft: 20 }} />
                        <TextInput placeholder="Email Address" onChangeText={val => setEmail(val)} style={{ width: "95%", height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, paddingLeft: 20 }} />
                        <TextInput placeholder="Mobile Number" onChangeText={val => setPhoneNo(val)} style={{ width: "95%", height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, paddingLeft: 20 }} />
                        <TextInput placeholder="Password" secureTextEntry onChangeText={val => setPassword(val)} style={{ width: "95%", height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, paddingLeft: 20 }} />
                        <TextInput placeholder="Confirm Password" secureTextEntry onChangeText={val => setConf_Password(val)} style={{ width: "95%", height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, paddingLeft: 20 }} />

                        <TouchableOpacity onPress={() => UserSignup()}>
                            <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: Dimensions.get("screen").width - 35, height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>SIGN UP </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ fontFamily: "Roboto", fontSize: 14, textAlign: "center", opacity: .5, marginTop: 10 }}>Already have an account? SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>
    )
}