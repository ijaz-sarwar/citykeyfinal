import React, {useState} from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

export default Login = ({ navigation }) => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const UserLogin = async () => {
        if (password !== undefined && password !== "" && email !== undefined && email !== "") {

            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                    navigation.navigate("FirstStep")
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });

        }
    }




    return (
        <LinearGradient colors={['#D51B2E', '#6C1381', '#110CC9']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={{ flex: 1 }}>
            <Image source={require("../assets/Ellipse.png")} style={{ position: "absolute", top: -140, left: -130 }} />
            <Image source={require("../assets/Path.png")} style={{ position: "absolute", right: -60, top: "-3%" }} />
            <Image source={require("../assets/Group46.png")} style={{ position: "absolute", top: "5%", right: "20%", opacity: .7 }} />
            <Image source={require("../assets/Group45.png")} style={{ position: "absolute", right: "15%", top: "30%", opacity: .7 }} />
            <Image source={require("../assets/Group52.png")} style={{ position: "absolute", left: "15%", top: "22%", opacity: .7 }} />
            <View style={{ alignItems: "center" }}>
                <View style={{ height: "35%", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../assets/whitelogo.png")} />
                </View>

                <View style={{ width: Dimensions.get("screen").width, height: "65%", backgroundColor: "white", borderTopRightRadius: 50, borderTopLeftRadius: 60, padding: 10 }}>
                    <View style={{ padding: 20, paddingLeft: 10, paddingTop: 30 }}>
                        <Text style={{ color: "black", opacity: .5, fontSize: 20, fontFamily: "Roboto" }}>SIGN IN</Text>
                        <Text style={{ color: "grey", opacity: .5, fontSize: 13 }}>Start your advertisement with us</Text>
                    </View>

                    <View style={{ alignItems: "center" }}>

                        <TextInput placeholder="Email Address" onChangeText={val => setEmail(val)} style={{ width: "95%", height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", paddingLeft: 20, marginTop: 10 }} />
                        <TextInput placeholder="Password" secureTextEntry onChangeText={val => setPassword(val)} style={{ width: "95%", height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, paddingLeft: 20 }} />

                        <TouchableOpacity onPress={() => navigation.navigate("ForgetPass")}>
                            <Text style={{ fontSize: 14, fontFamily: "Roboto", color: "#C72835", marginTop: 10 }}>Forget Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => UserLogin()} style={{width : "100%", alignItems : "center"}}>
                            <View style={{ opacity: .9, width: "95%", height: 48, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, justifyContent: "center", alignItems: "center", backgroundColor: "#D22A2D" }}>
                                <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>SIGN IN </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={{ fontFamily: "Roboto", fontSize: 14, textAlign: "center", opacity: .5, marginTop: 10 }}>Don't have an account? SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>
    )
}