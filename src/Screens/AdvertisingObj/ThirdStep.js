import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, Modal, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default ThirdStep = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
            <StatusBar backgroundColor={"#CC272A"} hidden={false} />
            <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()} />
                <Text style={{ color: "white", fontSize: 17 }}>Advertising Objective</Text>
                <Text style={{ color: "white", fontSize: 13 }}>Exit</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 20 }}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../../assets/ThirdStep.png")} />
                        <LinearGradient colors={['#4E1595', '#781D76', '#D22A2D']} start={{ x: 0, y: 1.5 }} end={{ x: 0, y: 0 }} style={{ height: 153, width: Dimensions.get("screen").width - 20, borderRadius: 10, borderWidth: 1, borderColor: "lightgrey", marginTop: 30, padding: 15, justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Component10.png")} />
                            <Text style={{ color: "white", marginTop: 10 }}>GREAT WORK!</Text>
                            <Text style={{ color: "white", opacity: .5 }}>You have done the great work</Text>
                        </LinearGradient>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ opacity: .5 }}>Share to Facebook Page</Text>

                        <View style={{ width: Dimensions.get("screen").width - 40, height: 48, backgroundColor: "#2E008B", borderRadius: 50, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>Facebook</Text>
                        </View>

                        <View style={{ width: Dimensions.get("screen").width - 40, height: 48, backgroundColor: "#CC272A", borderRadius: 50, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>Instagram</Text>
                        </View>

                        <View style={{ width: Dimensions.get("screen").width - 40, height: 48, backgroundColor: "#1E0015", borderRadius: 50, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>Tiktok</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ width: "50%", height: 48, backgroundColor: "#CC272A", borderRadius: 50, marginTop: 20, justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                                <Text style={{ color: "white" }}>Done</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>

    )
}