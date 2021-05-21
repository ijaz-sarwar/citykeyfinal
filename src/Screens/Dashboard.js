import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, Modal, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';

export default ({ navigation }) => {

    const [SelectVideo, setVideo] = useState(null);

    async function pickVideo() {
        await launchImageLibrary({
            mediaType: 'video',
            quality: 1,
        }, function (success, error) {
            console.log(success)
            if (success.uri) {
                console.log(success.uri)
                setVideo(success.uri);
                navigation.navigate("VideoEditor", { VideoLink: success.uri })
            }
            if (error) {
                console.log(error)
            }
        });
    };


    return (
        <View style={{ flex: 1, backgroundColor: "#F7F7F7", justifyContent: "center", alignItems: "center" }}>
            <StatusBar backgroundColor={"#CC272A"} hidden={false} />
            <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "center", paddingLeft: 30 }}>
                <Text style={{ color: "white", fontSize: 17 }}>Citikey Editor</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <LinearGradient colors={['#4E1595', '#781D76', '#D22A2D']} start={{ x: 0, y: 1.5 }} end={{ x: 0, y: 0 }} style={{ height: 153, width: Dimensions.get("screen").width - 20, borderRadius: 10, borderWidth: 1, borderColor: "lightgrey", marginTop: 30, padding: 15, flexDirection: "row", justifyContent: "space-around", alignSelf: "center" }}>
                    <View style={{ width: "60%", height: 110, justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, color: "white" }}>Edit Your Videos</Text>
                        <Text></Text>
                        <Text style={{ fontSize: 12, color: "white" }}>Join Millions of people creating and sharing videos with Citikey easy drag and drop video maker</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/Component11.png")} />
                    </View>
                </LinearGradient>

                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between", padding: 2 }}>
                    <View style={{ backgroundColor: "#FFE8E8", height: 165, width: 158, borderRadius: 5, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <TouchableOpacity onPress={() => pickVideo()}>
                            <LinearGradient colors={['#4E1595', '#781D76', '#D22A2D']} start={{ x: 0, y: 1.5 }} end={{ x: 0, y: 0 }} style={{ height: 59, width: 59, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                                <FontAwesome name="edit" size={25} color="white" />
                            </LinearGradient>
                            <Text style={{ fontSize: 18, color: "#6C6C6C" }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                        <View style={{ backgroundColor: "#FFE8E8", height: 79, width: 158, borderRadius: 5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                            <LinearGradient colors={['#4E1595', '#781D76', '#D22A2D']} start={{ x: 0, y: 1.5 }} end={{ x: 0, y: 0 }} style={{ height: 39, width: 39, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Ionicons name="download-outline" size={20} color="white" />
                            </LinearGradient>
                            <Text style={{ marginLeft: 5, fontSize: 18, color: "#6C6C6C" }}>My Draft</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("MyVideosScreen")}>
                            <View style={{ backgroundColor: "#FFE8E8", height: 79, width: 158, borderRadius: 5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                <LinearGradient colors={['#4E1595', '#781D76', '#D22A2D']} start={{ x: 0, y: 1.5 }} end={{ x: 0, y: 0 }} style={{ height: 39, width: 39, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Ionicons name="play-circle-outline" size={20} color="white" />
                                </LinearGradient>
                                <Text style={{ marginLeft: 5, fontSize: 18, color: "#6C6C6C" }}>My Videos</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between", padding: 2 }}>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: 66, height: 65, backgroundColor: "white", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="document-text-outline" size={25} color="grey" />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 14, color: "#6C6C6C" }}>Add Text</Text>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: 66, height: 65, backgroundColor: "white", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="document-text-outline" size={25} color="grey" />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 14, color: "#6C6C6C" }}>Add Text</Text>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: 66, height: 65, backgroundColor: "white", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="ios-images-outline" size={25} color="grey" />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 14, color: "#6C6C6C" }}>Mixer</Text>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: 66, height: 65, backgroundColor: "white", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="play-circle-outline" size={25} color="grey" />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 14, color: "#6C6C6C" }}>Converter</Text>
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text>EFFECTS</Text>

                    <View style={{ flexDirection: "row", width: Dimensions.get("screen").width - 30 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Image source={require("../assets/Rectangle98.png")} style={{ width: 102 }} />
                            <Image source={require("../assets/Rectangle99.png")} style={{ width: 102 }} />
                            <Image source={require("../assets/Rectangle100.png")} style={{ width: 102 }} />
                            <Image source={require("../assets/Rectangle101.png")} style={{ width: 102 }} />
                        </ScrollView>
                    </View>
                </View>

            </ScrollView>

            <View style={{ width: Dimensions.get("screen").width, height: 55, backgroundColor: "white", justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Ionicons name="at-circle-sharp" size={25} color="grey" />
                    <Text>Template</Text>
                </View>
                <TouchableOpacity onPress={() => pickVideo()}>
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <MaterialCommunityIcons name="circle-edit-outline" size={25} color="grey" />
                        <Text>Create</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <FontAwesome name="user-o" size={23} color="grey" />
                    <Text>My Account</Text>
                </View>

            </View>
        </View>

    )
}