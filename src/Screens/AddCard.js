import React, { useEffect, Component, PureComponent } from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


export default class CardFormScreen extends PureComponent {
    static title = 'Card Form'

    state = {
        loading: false,
        token: null,
        success: null
    }

    doPayment = async () => {
    }

    handleCardPayPress = async () => {
    }

    render() {
        const { loading, token, success, response } = this.state


        return (

            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                    <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()} />
                    <Text style={{ color: "white", fontSize: 17 }}>ADD CARD</Text>
                    <Text style={{ color: "white", fontSize: 13 }}></Text>
                </View>
                <View style={{ alignItems: "center", padding: 10 }}>
                    <View style={{ width: Dimensions.get("screen").width - 40, height: 195, backgroundColor: "white", marginTop: 20, borderRadius: 15, flexDirection: "column" }}>
                        <View style={{ width: "100%", height: 13, backgroundColor: "#CC272A", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}></View>
                        <View style={{ padding: 15, flexDirection: "column" }}>
                            <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45 }}>CARD HOLDER</Text>
                            <Text style={{ fontSize: 14, color: "#6C6C6C" }}>Mike Holder</Text>

                            <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CARD NUMBER</Text>
                            <Text style={{ fontSize: 14, color: "#6C6C6C" }}>0314 5678 8908 9000</Text>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View>
                                    <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CARD EXPIRE</Text>
                                    <Text style={{ fontSize: 14, color: "#6C6C6C" }}>09/22</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CVV</Text>
                                    <Text style={{ fontSize: 14, color: "#6C6C6C" }}>***</Text>
                                </View>
                                <Image source={require("../assets/mastercard.png")} />
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: "flex-start", paddingTop: 20 }}>
                        <View>
                            <Text>Card Number</Text>
                            <View style={{ height: 48, width: Dimensions.get("screen").width - 40, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                <TextInput style={{ height: 48, width: "83%", paddingLeft: 20 }} placeholder="0315 5678 8908 9000" />
                                <Image source={require("../assets/mastercard.png")} />
                            </View>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text>Name on Card</Text>
                            <View style={{ height: 48, width: Dimensions.get("screen").width - 40, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                <TextInput style={{ height: 48, width: "83%", paddingLeft: 20 }} placeholder="Mike Holder" />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginTop: 15 }}>
                                <Text>Expire Date</Text>
                                <View style={{ height: 48, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                    <TextInput style={{ height: 48, width: "40%", paddingLeft: 20 }} placeholder="09/22" />
                                </View>
                            </View>


                            <View style={{ marginTop: 15, marginLeft: 20 }}>
                                <Text>CVV</Text>
                                <View style={{ height: 48, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                    <TextInput style={{ height: 48, width: "40%", paddingLeft: 20 }} placeholder="***" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ThirdStep")} style={{ alignSelf: "center" }}>
                        <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: Dimensions.get("screen").width - 40, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>ADD CARD</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitle: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    token: {
        height: 20,
    },
})
// export default ({ navigation }) => {

//     return (
    //     <View style={{ flex: 1 }}>
    //         <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
    //             <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()} />
    //             <Text style={{ color: "white", fontSize: 17 }}>ADD CARD</Text>
    //             <Text style={{ color: "white", fontSize: 13 }}></Text>
    //         </View>
    //         <View style={{ alignItems: "center", padding: 10 }}>
    //             <View style={{ width: Dimensions.get("screen").width - 40, height: 195, backgroundColor: "white", marginTop: 20, borderRadius: 15, flexDirection: "column" }}>
    //                 <View style={{ width: "100%", height: 13, backgroundColor: "#CC272A", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}></View>
    //                 <View style={{ padding: 15, flexDirection: "column" }}>
    //                     <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45 }}>CARD HOLDER</Text>
    //                     <Text style={{ fontSize: 14, color: "#6C6C6C" }}>Mike Holder</Text>

    //                     <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CARD NUMBER</Text>
    //                     <Text style={{ fontSize: 14, color: "#6C6C6C" }}>0314 5678 8908 9000</Text>

    //                     <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
    //                         <View>
    //                             <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CARD EXPIRE</Text>
    //                             <Text style={{ fontSize: 14, color: "#6C6C6C" }}>09/22</Text>
    //                         </View>
    //                         <View>
    //                             <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CVV</Text>
    //                             <Text style={{ fontSize: 14, color: "#6C6C6C" }}>***</Text>
    //                         </View>
    //                         <Image source={require("../assets/mastercard.png")} />
    //                     </View>
    //                 </View>
    //             </View>

    //             <View style={{ alignItems: "flex-start", paddingTop: 20 }}>
    //                 <View>
    //                     <Text>Card Number</Text>
    //                     <View style={{ height: 48, width: Dimensions.get("screen").width - 40, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
    //                         <TextInput style={{ height: 48, width: "83%", paddingLeft: 20 }} placeholder="0315 5678 8908 9000" />
    //                         <Image source={require("../assets/mastercard.png")} />
    //                     </View>
    //                 </View>
    //                 <View style={{ marginTop: 15 }}>
    //                     <Text>Name on Card</Text>
    //                     <View style={{ height: 48, width: Dimensions.get("screen").width - 40, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
    //                         <TextInput style={{ height: 48, width: "83%", paddingLeft: 20 }} placeholder="Mike Holder" />
    //                     </View>
    //                 </View>

    //                 <View style={{flexDirection : "row"}}>
    //                     <View style={{ marginTop: 15 }}>
    //                         <Text>Expire Date</Text>
    //                         <View style={{ height: 48, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
    //                             <TextInput style={{ height: 48, width: "40%", paddingLeft: 20 }} placeholder="09/22" />
    //                         </View>
    //                     </View>


    //                     <View style={{ marginTop: 15, marginLeft : 20 }}>
    //                         <Text>CVV</Text>
    //                         <View style={{ height: 48, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
    //                             <TextInput style={{ height: 48, width: "40%", paddingLeft: 20 }} placeholder="***" />
    //                         </View>
    //                     </View>
    //                 </View>
    //             </View>
    //             <TouchableOpacity onPress={() => navigation.navigate("ThirdStep")} style={{ alignSelf: "center" }}>
    //                 <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: Dimensions.get("screen").width - 40, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
    //                     <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>ADD CARD</Text>
    //                 </LinearGradient>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // )
// } 