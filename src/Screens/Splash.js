import React, {useEffect} from 'react';
import {View, Image, Dimensions, StatusBar} from 'react-native';


export default Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("GetStarted")
        }, 2000);
    })

    return(
        <View style={{flex : 1}}>
            <StatusBar hidden={true}/>
            <Image source={require("../assets/Splashscreen.png")} style={{width : Dimensions.get("screen").width, height : Dimensions.get("screen").height}}/>
        </View>
    )
} 