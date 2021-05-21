import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default FirstStep = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar backgroundColor={"#CC272A"} hidden={false} />
            <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()}/>
                <Text style={{ color: "white", fontSize: 17 }}>Advertising Objective</Text>
                <Text style={{ color: "white", fontSize: 13 }}>Exit</Text>
            </View>

            <View style={{ padding: 20 }}>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../../assets/FirstStep.png")} />
                    <LinearGradient colors={['#4E1595', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ height: 143, width: Dimensions.get("screen").width - 20, borderRadius: 10, borderWidth: 1, borderColor: "lightgrey", marginTop: 30, padding: 15 }}>
                        <View style={{ width: "75%" }}>
                            <Text style={{ color: "white", fontSize: 16 }}>Welcome to citikey Ads!</Text>
                            <Text style={{ color: "white", marginTop: 7, opacity: .75 }}>Enter your promotion URL to get more visits to your website</Text>
                            <View style={{ opacity: .9, width: 100, height: 30, borderRadius: 50, marginTop: 10, justifyContent: "center", alignItems: "center", backgroundColor : "white" }}>
                                <Text style={{color : "#CA2629", fontSize : 13}}>Get Started</Text>
                            </View>
                        </View>
                        <Image source={require("../../assets/Component8.png")} style={{position : "absolute", right : 2, top : 20}}/>
                        <Image source={require("../../assets/Path154.png")} style={{top : 1, position : "absolute", right : -12}} />
                        <Image source={require("../../assets/Path154.png")} style={{top : -60, position : "absolute", transform: [{ rotate: '-90deg' }], left : 45 }} />
                    </LinearGradient>
                </View>

                <View style={{ flexDirection: "row", padding: 20, paddingTop: 40 }}>
                    <Image source={require("../../assets/web.png")} style={{ width: 40, height: 40 }} />
                    <View style={{ flexDirection: "column", marginLeft: 15, opacity: .4 }}>
                        <Text style={{ fontSize: 15 }}>Get More Website Traffic</Text>
                        <Text>https://citikey.com.au/</Text>
                    </View>
                </View>
                <View style={{ width: Dimensions.get("screen").width - 30, padding: 0, marginTop: 20, opacity: .3 }}>
                    <Text style={{ fontSize: 12 }}>Note: The following Objective are supported in the desktop version: React, Video Views, App installs, Conversions</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("SecondStep")} style={{ alignSelf: "center" }}>
                    <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: 200, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>NEXT</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}