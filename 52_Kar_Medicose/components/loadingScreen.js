import React, { useEffect } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import { Colors } from "../constant/styles";

const LoadingScreen = ({ navigation }) => {

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                Roboto_Light: require("../assets/fonts/roboto/Roboto-Light.ttf"),
                Roboto_Medium: require("../assets/fonts/roboto/Roboto-Medium.ttf"),
                Roboto_Regular: require("../assets/fonts/roboto/Roboto-Regular.ttf"),
            });
            navigation.push('Splash');
        }
        loadFont();
    })

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }} />
    )
}

export default LoadingScreen;