import React, { useState, useCallback } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    BackHandler,
    ScrollView,
} from "react-native";
import { Colors, Sizes, Fonts } from "../../constant/styles";
import IntlPhoneInput from 'react-native-intl-phone-input';
import { useFocusEffect } from "@react-navigation/native";

const { height } = Dimensions.get('screen');

const SigninScreen = ({ navigation }) => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        updateState({ backClickCount: 1 });
        setTimeout(() => {
            updateState({ backClickCount: 0 })
        }, 1000)
    }

    const [state, setState] = useState({
        backClickCount: 0
    });

    const updateState = (data) => setState((state) => ({ ...state, ...data }));

    const { backClickCount } = state;

    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F4F4' }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {deliveryBoyImage()}
                    {signinInfo()}
                    {phoneNumberInfo()}
                    {continueButton()}
                    {otpInfo()}
                    {loginWithFacebookButton()}
                    {loginWithGoogleButton()}
                </ScrollView>
            </View>
            {
                backClickCount == 1
                    ?
                    <View style={[styles.animatedView]}>
                        <Text style={{ ...Fonts.whiteColor16Regular }}>
                            Press Back Once Again to Exit
                        </Text>
                    </View>
                    :
                    null
            }
        </SafeAreaView>
    )

    function loginWithGoogleButton() {
        return (
            <View style={styles.loginWithGoogleButtonStyle}>
                <Image
                    source={require('../../assets/images/google.png')}
                    style={{ width: 28.0, height: 28.0, marginRight: Sizes.fixPadding + 5.0 }}
                    resizeMode="cover"
                />
                <Text style={{ ...Fonts.blackColor18Medium }}>
                    Log in with Google
                </Text>
            </View>
        )
    }

    function loginWithFacebookButton() {
        return (
            <View style={styles.loginWithFacebookButtonStyle}>
                <Image
                    source={require('../../assets/images/facebook.png')}
                    style={{ width: 28.0, height: 28.0, marginRight: Sizes.fixPadding + 5.0 }}
                    resizeMode="cover"
                />
                <Text style={{ ...Fonts.whiteColor18Medium }}>
                    Log in with Facebook
                </Text>
            </View>
        )
    }

    function otpInfo() {
        return (
            <Text style={{
                ...Fonts.grayColor17Medium,
                textAlign: 'center',
                marginTop: Sizes.fixPadding,
            }}>
                We'll send OTP for Verification.
            </Text>
        )
    }

    function continueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.push('Verification')}
                style={styles.continueButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor18Medium }}>
                    Continue
                </Text>
            </TouchableOpacity>
        )
    }

    function signinInfo() {
        return (
            <Text style={{
                ...Fonts.grayColor17Medium, textAlign: 'center',
                marginBottom: Sizes.fixPadding,
            }}>
                Signin with Phone Number
            </Text>
        )
    }

    function deliveryBoyImage() {
        return (
            <Image
                source={require('../../assets/images/delivery.png')}
                style={styles.deliveryBoyImageStyle}
                resizeMode="cover"
            />
        )
    }

    function phoneNumberInfo() {
        return (
            <IntlPhoneInput
                onChangeText={({ phoneNumber }) => { setPhoneNumber(phoneNumber) }}
                defaultCountry="IN"
                containerStyle={styles.phoneNumberTextFieldStyle}
                dialCodeTextStyle={{ ...Fonts.blackColor17Medium, marginLeft: Sizes.fixPadding - 5.0, }}
                phoneInputStyle={{
                    flex: 1,
                    marginLeft: Sizes.fixPadding + 5.0,
                    ...Fonts.blackColor17Medium,
                }}
                selectionColor={Colors.primaryColor}
                placeholder="Phone Number"
            />
        )
    }
}

const styles = StyleSheet.create({
    animatedView: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
    selectAreaModalStyle: {
        height: height - 200.0,
        width: 170.0,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0
    },
    phoneNumberTextFieldStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding,
        height: 55.0,
        backgroundColor: Colors.whiteColor,
        marginTop: Sizes.fixPadding,
    },
    loginWithGoogleButtonStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        height: 55.0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding * 2.0,
    },
    loginWithFacebookButtonStyle: {
        backgroundColor: '#3B5998',
        borderRadius: Sizes.fixPadding - 5.0,
        height: 55.0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding,
        marginTop: Sizes.fixPadding * 5.0,
    },
    continueButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        height: 55.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding,
        marginTop: Sizes.fixPadding * 4.0,
    },
    deliveryBoyImageStyle: {
        height: 150.0,
        width: 220.0,
        alignSelf: 'center',
        marginTop: Sizes.fixPadding * 6.0,
        marginBottom: Sizes.fixPadding * 3.0
    }
})

export default SigninScreen;