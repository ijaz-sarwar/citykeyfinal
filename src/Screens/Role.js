import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
    { label: '', value: 0 },
    { label: '', value: 0 },
];

export default Role = ({ navigation }) => {
    return (
        <LinearGradient colors={['#D51B2E', '#6C1381', '#110CC9']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1.3 }} style={{ flex: 1 }}>
            <Image source={require("../assets/Ellipse.png")} style={{ position: "absolute", top: -90, left: -90 }} />
            <Image source={require("../assets/Path.png")} style={{ position: "absolute", right: -60, bottom: "-30%" }} />
            <Image source={require("../assets/Group46.png")} style={{ position: "absolute", top: "10%", right: "30%", opacity: .7 }} />
            <Image source={require("../assets/Group51.png")} style={{ position: "absolute", right: "15%", top: "25%", opacity: .7 }} />
            <Image source={require("../assets/Group52.png")} style={{ position: "absolute", left: "40%", top: "28%", opacity: .7 }} />

            <View style={{ flex: 1, justifyContent: "center", padding: 20, marginTop: -60 }}>
                <Text style={{ fontSize: 30, fontFamily: "Roboto", color: "white" }}>I am</Text>
                <View style={{ marginTop: 30 }}>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ width: 154, height: 154, borderRadius: 10, backgroundColor: "rgba(255,255,255,0.4)", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../assets/Component6.png")} style={{ opacity: .8 }} />
                            <Text style={{ fontFamily: "Roboto", fontSize: 14, color: "white", marginTop: 10 }}>Citikey Member</Text>
                        </View>
                        <View style={{ width: 154, height: 154, borderRadius: 10, backgroundColor: "rgba(255,255,255,0.4)", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../assets/Component7.png")} style={{ opacity: .8 }} />
                            <Text style={{ fontFamily: "Roboto", fontSize: 14, color: "white", marginTop: 10 }}>User</Text>
                        </View>
                        {/* <Image source={require("../assets/Component1.png")} />
                        <Image source={require("../assets/Component2.png")} style={{ marginLeft: 7 }} /> */}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                        {radio_props.map((obj, i) => (
                            <RadioButton labelHorizontal={true} key={i} >
                                <RadioButtonInput
                                    obj={obj}
                                    index={i}
                                    onPress={() => navigation.navigate("Signup")}
                                    borderWidth={1}
                                    buttonInnerColor={'white'}
                                    buttonOuterColor={"white"}
                                    buttonSize={15}
                                />

                            </RadioButton>
                        ))}

                    </View>
                </View>
                <Image source={require("../assets/Group45.png")} style={{ position: "relative", top: 50, left: 70, opacity: .6 }} />
                <Image source={require("../assets/Group52.png")} style={{ position: "absolute", bottom: "15%", left: "10%", opacity: .7 }} />
                <Image source={require("../assets/Group69.png")} style={{ position: "absolute", bottom: "10%", left: "55%", opacity: .6 }} />
            </View>

        </LinearGradient>
    )
} 