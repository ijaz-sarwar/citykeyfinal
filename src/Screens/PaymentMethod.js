import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import PayPal from 'react-native-paypal-wrapper';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import { Thumbnail } from 'native-base';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


export default ({ navigation }) => {

    const [loading, setLoading] = useState(false)
    const [payment, setPayment] = useState()
    const [token, setToken] = useState()

    const paypal = () => {
        var userID = auth().currentUser.uid;

        PayPal.initialize(PayPal.SANDBOX, 'AZxF_nqhGvQi6CclbVdKnSlmXZLYxebJ2Wg-DHzF-irz6eZ1eEfCb60nA-ke1CipaAX0U2bX8MXNaFGC');
        // 3 enviroments - NO_NETWORK, SANDBOX, PRODUCTION
        PayPal.pay({
            price: '10',
            currency: 'USD',
            description: 'Payment',
        }).then(confirm => {
            database().ref("users/" + userID).update({
                PaymentClear: true,
                PaymentObj: confirm
            })
        }).catch(error => console.log(error));
    }

    const handleCardPayPress = async () => {
        try {
            setLoading(true)
            setPayment(null)
            const token = await stripe.paymentRequestWithCardForm({
                // Only iOS support this options
                smsAutofillDisabled: true,
                requiredBillingAddressFields: 'full',
                prefilledInformation: {
                    billingAddress: {
                        name: 'Citikey Store',
                        line1: 'Canary Place',
                        line2: '3',
                        city: 'Macon',
                        state: '',
                        country: 'Estonia',
                        postalCode: '31217',
                        email: 'admin@citikey.com',
                    },
                },
            })
            console.log(token);
            setLoading(false)
            setToken(token)
        } catch (error) {
            setLoading(false)
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                    <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()} />
                    <Text style={{ color: "white", fontSize: 17 }}>Payment Method</Text>
                    <Text style={{ color: "white", fontSize: 13 }}></Text>
                </View>
                <View style={{ alignItems: "center", padding: 10 }}>
                    <Text style={{ fontSize: 14, color: "#707070" }}>CHECKOUT</Text>
                    <Text style={{ fontSize: 14, color: "#707070", marginTop: 10 }}>Payment Method</Text>
                    <TouchableOpacity
                        onPress={() => paypal()}
                        style={{
                            height: h('10%'),
                            width: '100%',
                            // backgroundColor:'#ada',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Thumbnail source={require("../assets/button.png")} style={{ height: 35, width: 168 }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{ width: 118, height: 48, backgroundColor: "#CC272A", borderRadius: 40, borderTopRightRadius: 1, elevation: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 16 }}>Credit Card</Text>
                        </View>
                        <View style={{ width: 158, height: 48, backgroundColor: "white", borderRadius: 40, marginLeft: -40, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ marginLeft: 20, fontSize: 16, color: "#6C6C6C" }}>Debit Card</Text>
                        </View>
                    </View>
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

                    <View style={{ width: Dimensions.get("screen").width - 40, padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                        <Text>Edit Card info</Text>
                        {/* <Text onPress={() => navigation.navigate("AddCard")}>Add another Card</Text> */}
                        <Text onPress={() => { }}>Add another Card</Text>
                    </View>
                    <View style={{ width: Dimensions.get("screen").width - 40, borderWidth: 0.3, borderColor: "#CC272A", opacity: .43, marginTop: 10 }}></View>
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", padding: 20, paddingTop: 30 }}>
                        <Text style={{ fontSize: 14, color: "#6C6C6C" }}>Total</Text>
                        <Text style={{ fontSize: 27, color: "#C1273A", fontWeight: "bold" }}>$30</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ThirdStep")} style={{ alignSelf: "center" }}>
                        <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: Dimensions.get("screen").width - 40, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>NEXT</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}