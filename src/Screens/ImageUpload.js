import React, { useEffect } from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


export default ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()} />
                <Text style={{ color: "white", fontSize: 17 }}>Image Upload</Text>
                <Text style={{ color: "white", fontSize: 13 }}>Exit</Text>
            </View>
            <View style={{ alignItems: "center", padding: 10 }}>

                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("VideoEditor")}>
                        <Image source={require("../assets/ImageUpload/Rectangle84.png")} style={{ marginTop: 10 }} />
                    </TouchableOpacity>
                    <Image source={require("../assets/ImageUpload/Rectangle85.png")} style={{ marginTop: 10 }} />
                    <Image source={require("../assets/ImageUpload/Rectangle86.png")} style={{ marginTop: 10 }} />
                    <Image source={require("../assets/ImageUpload/Rectangle87.png")} style={{ marginTop: 10 }} />
                    <Image source={require("../assets/ImageUpload/Rectangle89.png")} style={{ marginTop: 10 }} />
                    <Image source={require("../assets/ImageUpload/Rectangle86.png")} style={{ marginTop: 10 }} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("ThirdStep")} style={{ alignSelf: "center" }}>
                    <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: 200, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>NEXT</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
} 