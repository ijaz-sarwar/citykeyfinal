import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, Modal, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default SecondStep = ({ navigation }) => {

    const [DisplayName_Box, UpdateDisplayName_Box] = useState(false)
    const [AdText_Box, UpdateAdText_Box] = useState(false)

    function DisplayNameModal() {
        return <Modal
            animationType="slide"
            transparent={true}
            visible={DisplayName_Box}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={{ width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: Dimensions.get("screen").width - 30, height: 250, borderRadius: 20, backgroundColor: "white", padding: 15, elevation: 10 }}>
                    <View style={{ flexDirection: "column", marginTop: 5 }}>
                        <Text style={{ color: "#6C6C6C", fontSize: 16 }}>Display Name</Text>
                        <Text style={{ opacity: .4, color: "#6C6C6C" }}>Enter your Display Name</Text>
                        <TextInput style={{ height: 110, width: "98%", borderRadius: 5, borderWidth: 0.3, borderColor: "#707070", marginTop: 10 }} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                            <TouchableOpacity onPress={() => UpdateDisplayName_Box(false)}>
                                <View style={{ backgroundColor: "#E6E6E6", opacity: .9, width: 145, height: 43, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 7, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto", color: "#707070", fontSize: 14 }}>Cancel</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: 145, height: 43, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 7, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>Submit</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    }

    function AdTextModal() {
        return <Modal
            animationType="slide"
            transparent={true}
            visible={AdText_Box}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={{ width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "center", alignItems: "center" }}>
                <View style={{ borderRadius: 20, backgroundColor: "white", padding: 15, elevation: 10 }}>
                    <View style={{ flexDirection: "column", marginTop: 5 }}>
                        <Text style={{ color: "#6C6C6C", fontSize: 16 }}>Ad Text</Text>
                        <View style={{ width: "99%", height: 47, backgroundColor: "#C1273A", borderRadius: 5, flexDirection: "row", alignItems: "center", padding: 10, marginTop: 10 }}>
                            <Image source={require("../../assets/awesome-cloud-download2.png")} />
                            <Text style={{ color: "white", marginLeft: 10 }}>Download Now</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Ionicons name="heart" size={20} color="grey" />
                                <Text style={{ marginLeft: 3 }}>Like</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Ionicons name="md-chatbubble" size={20} color="grey" />
                                <Text style={{ marginLeft: 3 }}>Comment</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Ionicons name="share-social-outline" size={20} color="grey" />
                                <Text style={{ marginLeft: 3 }}>Share</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={() => UpdateAdText_Box(false)}>
                                <View style={{ backgroundColor: "#E6E6E6", opacity: .9, width: 145, height: 43, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 7, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto", color: "#707070", fontSize: 14 }}>Cancel</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: 145, height: 43, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 7, justifyContent: "center", alignItems: "center", marginLeft: 5 }}>
                                    <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>Submit</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    }


    return (
        <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
            {DisplayName_Box && DisplayNameModal()}
            {AdText_Box && AdTextModal()}
            <StatusBar backgroundColor={"#CC272A"} hidden={false} />
            <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()} />
                <Text style={{ color: "white", fontSize: 17 }}>Advertising Objective</Text>
                <Text style={{ color: "white", fontSize: 13 }}>Exit</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 20 }}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../../assets/SecondStep.png")} />
                        <LinearGradient colors={['#4E1595', '#781D76', '#D22A2D']} start={{ x: 0, y: 1.5 }} end={{ x: 0, y: 0 }} style={{ height: 153, width: Dimensions.get("screen").width - 20, borderRadius: 10, borderWidth: 1, borderColor: "lightgrey", marginTop: 30, padding: 15 }}>
                            <View style={{ justifyContent: "center", alignItems: "center", padding: 5 }}>
                                <Image source={require("../../assets/Component9.png")} />
                                <Text style={{ marginTop: 3, color: "white", opacity: .67, fontSize: 14 }}>Now get started with your ad creative</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ width: "100%", backgroundColor: "#FFFFFF", borderRadius: 10, marginTop: 20 }}>
                        <View style={{ padding: 15, width: "100%" }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <TouchableOpacity onPress={() => UpdateDisplayName_Box(true)}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ color: "#6C6C6C" }}>Display Name</Text>
                                        <Text style={{ opacity: .5, color: "#6C6C6C" }}>Citikey Directory</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => UpdateDisplayName_Box(true)}>
                                    <Text style={{ fontSize: 16 }}>
                                        <Ionicons name="chevron-forward" size={25} color="black" onPress={() => navigation.goBack()} />
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "100%", borderBottomWidth: 1, borderColor: "#707070", opacity: .18, marginTop: 10 }} />
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                                <TouchableOpacity onPress={() => UpdateAdText_Box(true)}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ color: "#6C6C6C" }}>Ad Text</Text>
                                        <Text style={{ opacity: .5, color: "#6C6C6C" }}>Download now Like/Comment/Share</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => UpdateAdText_Box(true)}>
                                    <Text style={{ fontSize: 16 }}>
                                        <Ionicons name="chevron-forward" size={25} color="black" onPress={() => navigation.goBack()} />
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "100%", borderBottomWidth: 1, borderColor: "#707070", opacity: .18, marginTop: 10 }} />
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                                <View style={{ flexDirection: "column", width: "100%" }}>
                                    <Text style={{ color: "#6C6C6C" }}>Upload Materials</Text>
                                    <Text style={{ opacity: .5, color: "#6C6C6C" }}>Upload Video or Image</Text>
                                    <View style={{ padding: 15, height: 190, width: "100%", borderWidth: 2, borderStyle: "dashed", borderColor: "#CC272A", borderRadius: 10, marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                                        <Image source={require("../../assets/awesome-cloud-upload.png")} />
                                        <Text style={{ fontSize: 12, color: "#ADADAD", textAlign: "center" }}>You can Upload upto 5 image or 1 video. We recommend 1200*528px and above</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("ImageUpload")}>
                                            <View style={{ opacity: .9, width: 140, height: 35, borderRadius: 5, marginTop: 10, justifyContent: "center", alignItems: "center", backgroundColor: "#CC272A" }}>
                                                <Text style={{ color: "#CA2629", fontSize: 14, color: "white", fontFamily: "Roboto" }}>Upload Image</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: "#CC272A", padding: 10 }}>Use Existing Materials</Text>

                        </View>
                    </View>
                    <View style={{ width: "100%", backgroundColor: "#FFFFFF", borderRadius: 10, marginTop: 20, padding: 15 }}>
                        <LinearGradient colors={['#4E1595', '#781D76', '#D22A2D']} start={{ x: 0, y: 1.5 }} end={{ x: 0, y: 0 }} style={{ height: 186, width: "100%", borderRadius: 10, borderWidth: 1, borderColor: "lightgrey", padding: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "column", width: "25%", height: 156, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 39, color: "white" }}>$30</Text>
                                    <Text style={{ color: "white" }}>Per Week</Text>
                                </View>
                                <View style={{ height: 138, borderWidth: 1, borderStyle: "dashed", alignSelf: "center", marginLeft: 20, borderColor: "grey" }}></View>
                                <View style={{ flexDirection: "column", alignSelf: "center", height: 138, justifyContent: "center", paddingLeft: 10, width: "65%" }}>
                                    <Text style={{ fontSize: 16, color: "white" }}>Features</Text>
                                    <Text style={{ color: "white", fontSize: 12 }}>1.Change Icon in the corner to your business logo and have saved it on your phone..</Text>
                                    <Text style={{ color: "white", fontSize: 12 }}>2.Editing Tools..</Text>
                                    <Text style={{ color: "white", fontSize: 12 }}>3.Change Background..</Text>
                                    <Text style={{ color: "white", fontSize: 12 }}>4.Add Music Effect..</Text>
                                </View>
                            </View>
                        </LinearGradient>


                        <TouchableOpacity onPress={() => navigation.navigate("PaymentMethod")} style={{ alignSelf: "center" }}>
                            <LinearGradient colors={['#D22A2D', '#781D76', '#180FC3']} start={{ x: 1, y: 0 }} end={{ x: 1, y: 0 }} style={{ opacity: .9, width: 200, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>Add Subscription Plan</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate("ThirdStep")} style={{ alignSelf: "center" }}>
                        <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: 200, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>NEXT</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>

    )
}