import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Ellipse from '../assets/Ellipse.png';
import Group41 from '../assets/Group41.png';
import LinearGradient from 'react-native-linear-gradient';

import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useIsFocused } from "@react-navigation/native";

export default GetStarted = ({ navigation }) => {

    const [IsEnabled, setEnabled] = useState(false)
    const isVisible = useIsFocused();
    useEffect(() => {

        if (isVisible) {
            ValidateUser()
        }

    }, [isVisible])

    function ValidateUser() {

        var items = []
        auth().onAuthStateChanged(function (user) {
            // var userID = auth().currentUser.uid;
            if (user) {
                database().ref("users/" + user.uid).once("value").then(function (snapshot) {
                    snapshot.child("EditedVideos").forEach(function (childsnapshot) {
                        console.log(childsnapshot.val().VideoStorageKey)
                        items.push({
                            key: childsnapshot.val().VideoStorageKey
                        })
                    })
                    if (snapshot.val().PaymentClear === true) {
                        navigation.navigate("FirstStep")
                    } else {
                        console.log(items.length)
                        if (items.length > 2) {
                            Alert.alert(
                                "Warning",
                                "Your Trail is expire. Please buy our subscription",
                                [
                                    {
                                        text: "Buy",
                                        onPress: () => {

                                            navigation.navigate("PaymentMethod")
                                        }
                                    },
                                ]
                            )
                        }
                        else {
                            navigation.navigate("FirstStep")
                        }

                    }
                })
            }
            else {
                setEnabled(true)
            }
        })
    }
    return (
        <LinearGradient colors={['#D51B2E', '#6C1381', '#110CC9']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1.3 }} style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <Image source={require("../assets/Ellipse.png")} style={{ position: "absolute", top: -90, left: -90 }} />
            <Image source={require("../assets/Path.png")} style={{ position: "absolute", right: -60 }} />
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", padding: 20 }}>
                <Text style={{ letterSpacing: 1, marginTop: 50, textAlign: "center", fontFamily: "Roboto", fontSize: 33, color: "white" }}>WELCOME TO CITIKEY</Text>
                <Image source={require("../assets/Group41.png")} />

                <TouchableOpacity disabled={IsEnabled ? false : true} onPress={() => navigation.navigate("Role")}>
                    <View style={{ width: Dimensions.get("screen").width - 100, height: 50, backgroundColor: "#e4f2f2", borderRadius: 40, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Roboto", fontSize: 21, color: "#3312AC" }}>GET STARTED</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity disabled={IsEnabled ? false : true} style={{ marginTop: -20 }} onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontFamily: "Roboto", fontSize: 14, color: "white", textAlign: "center" }}>Already have an account? SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}