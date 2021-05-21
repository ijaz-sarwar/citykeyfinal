import React, { Component, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, Modal, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import sampleVideo from '../assets/sample.mp4';
import { AssetURI, Configuration } from './configuration';
import { VESDK, VideoEditorModal, } from 'react-native-videoeditorsdk';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default class VideoEditor extends Component {


    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() {
        try {
            // console.log(this.props.route.params.VideoLink)
        } catch (error) {

        }
    }

    async DownloadAndSave(res) {
        var userID = auth().currentUser.uid;
        const response = await fetch(this.state.response.video);
        const blob = await response.blob();
        var newPostKey = database().ref().child('posts').push().key;
        var ref = storage().ref("Videos").child(newPostKey);
        ref.put(blob)
            .then((result) => {
                storage().ref("Videos").child(newPostKey).getDownloadURL()
                    .then((url) => {
                        console.log(url)
                        var d = new Date();
                        var n = d.toLocaleDateString();
                        database().ref("users/" + userID).child("EditedVideos" + "/" + newPostKey).set({
                            Video: url,
                            title: this.state.title,
                            description : this.state.description,
                            time: n,
                            date: d,
                            VideoStorageKey: newPostKey
                        }).then(() => {
                            this.props.navigation.navigate("Dashboard")
                        })
                    })
            })
    }

    DisplayNameModal() {
        return <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.DisplayName_Box}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <View style={{ width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: Dimensions.get("screen").width - 30, height: 260, borderRadius: 20, backgroundColor: "white", padding: 15, elevation: 10 }}>
                    <View style={{ flexDirection: "column", marginTop: 5 }}>
                        <Text style={{ color: "#6C6C6C", fontSize: 16 }}>Video Name & description</Text>
                        {/* <Text style={{ opacity: .4, color: "#6C6C6C" }}>Enter your Display Name</Text> */}
                        <TextInput onChangeText={(val) => this.setState({ title : val })} style={{ height: 40, width: "98%", borderRadius: 5, textAlignVertical: "top", borderWidth: 0.3, borderColor: "#707070", marginTop: 10 }} />
                        {/* <Text style={{ color: "#6C6C6C", fontSize: 16 }}>Video description</Text> */}
                        <TextInput onChangeText={(val) => this.setState({ description : val })} placeholder="Video Description here" style={{ height: 90, width: "98%", borderRadius: 5, textAlignVertical: "top", borderWidth: 0.3, borderColor: "#707070", marginTop: 10 }} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                            <TouchableOpacity >
                                <View style={{ backgroundColor: "#E6E6E6", opacity: .9, width: 145, height: 43, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 7, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto", color: "#707070", fontSize: 14 }}>Cancel</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.DownloadAndSave()}>
                                <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: 145, height: 43, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 7, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>Save Video</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    }

    ShowModal(res) {
        this.setState({
            DisplayName_Box: true,
            response: res
        })
        console.log(this.state.response.video)
        
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.DisplayName_Box && this.DisplayNameModal()}

                <VideoEditorModal onCancel={() => this.props.navigation.navigate("Dashboard")} onExport={(res) => this.ShowModal(res)} visible={true} video={{ uri: this.props.route.params.VideoLink }} />
            </View>
        );
    }
}


export { VESDK, VideoEditorModal };