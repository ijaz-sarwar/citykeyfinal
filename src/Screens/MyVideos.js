import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, Modal, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import Video from 'react-native-video';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {
    shareOnFacebook,
    shareOnTwitter,
} from 'react-native-social-share';


export default ({ navigation }) => {
    const video = React.useRef(null);

    const [MyVideos, setMyVideo] = useState([]);
    const [SelectVideo, setVideo] = useState(null);

    useEffect(() => {
        var userID = auth().currentUser.uid;
        var items = []

        database().ref("users/" + userID).child("EditedVideos").once("value").then(function (snapshot) {
            snapshot.forEach(function (childsnapshot) {
                // console.log(childsnapshot.val())
                // for (var i = 0; i < childsnapshot.val().length; i++) {
                items.push({
                    Video: childsnapshot.val().Video,
                    Key: childsnapshot.val().VideoStorageKey,
                    title: childsnapshot.val().title,
                    description: childsnapshot.val().description
                })
                // }
            })
        }).then(() => {
            console.log("items ==>", items)
            setMyVideo(items)
        })
    })

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

    function ShareOnFB(link) {

        shareOnFacebook({
            'text': `${`Check My Edited Video on Citikey :)\n\n` + link}`,
            'link': "https://artboost.com/apple-touch-icon-144x144.png",
            'imagelink': 'https://artboost.com/apple-touch-icon-144x144.png',
        },
            (results) => {
                console.log(results);
            }
        )
    }

    function DeleteVideo(Key) {
        var userID = auth().currentUser.uid;

        Alert.alert(
            "Warning",
            "Are you sure to Delete this Video",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        storage().ref("Videos").child(Key).delete().then(() => {
                            database().ref("users/" + userID).child("EditedVideos" + "/" + Key).remove().then(() => {
                                alert("Video Deleted Susccesfully")
                            })
                        }).catch((error) => {
                            console.log(error)
                        });
                    }
                },
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
            ]
        );

    }

    return (
        <View style={{ flex: 1, backgroundColor: "#F7F7F7", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <StatusBar backgroundColor={"#CC272A"} hidden={false} />
            <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "center", paddingLeft: 30 }}>
                <Text style={{ color: "white", fontSize: 17 }}>Citikey Editor</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                {MyVideos.map((items, i) => {
                    return <View style={{ borderRadius: 10, width: 300, padding: 10, marginTop: 20, backgroundColor: "red" }}>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>{items.title}</Text>
                        <Text style={{ fontSize: 16, color: "white" }}>{items.description}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => navigation.navigate("VideoEditor", { VideoLink: items.Video })}>
                                <View style={{ backgroundColor: "white", opacity: .9, width: 70, height: 43, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 7, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto", color: "#707070", fontSize: 14 }}>Edit</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => ShareOnFB(items.Video)}>
                                <View style={{ backgroundColor: "blue", opacity: .9, width: 90, height: 43, borderRadius: 50, marginTop: 7, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>share</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => DeleteVideo(items.Key)}>
                                <View style={{ backgroundColor: "black", opacity: .9, width: 90, height: 43, borderRadius: 50, marginTop: 7, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                })}

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