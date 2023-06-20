import React, { createRef, useState } from "react";
import { Text, View, SafeAreaView, StatusBar, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';
import Dialog from "react-native-dialog";
import { Bounce } from 'react-native-animated-spinkit';
import OTPTextView from 'react-native-otp-textinput';

const { width } = Dimensions.get('screen');

const VerificationScreen = ({ navigation }) => {

    const [otpInput, setotpInput] = useState('');
    const [isLoading, setisLoading] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F4F4' }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {backArrow()}
                    {verificationInfo()}
                    {otpFields()}
                    {resendInfo()}
                    {submitButton()}
                </ScrollView>
            </View>
            {loading()}
        </SafeAreaView>
    )

    function resendInfo() {
        return (
            <View style={styles.resendInfoWrapStyle}>
                <Text style={{ ...Fonts.grayColor15Medium }}>
                    Didn't receive OTP Code!
                </Text>
                <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                    Resend
                </Text>
            </View>
        )
    }

    function loading() {
        return (
            <Dialog.Container
                visible={isLoading}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{ backgroundColor: 'white', alignItems: 'center', }}>
                    <Bounce size={40} color={Colors.primaryColor} />
                    <Text style={{
                        ...Fonts.grayColor16Medium,
                        marginTop: Sizes.fixPadding * 2.0
                    }}>
                        Please wait..
                    </Text>
                </View>
            </Dialog.Container>
        );
    }

    function otpFields() {
        return (
            <OTPTextView
                containerStyle={{ marginTop: Sizes.fixPadding * 4.0, marginHorizontal: Sizes.fixPadding * 2.0, }}
                handleTextChange={(text) => {
                    setotpInput(text)
                    if (otpInput.length == 3) {
                        setisLoading(true)
                        setTimeout(() => {
                            setisLoading(false)
                            navigation.push('BottomTabBar')
                        }, 2000);
                    }
                }}
                inputCount={4}
                keyboardType="numeric"
                tintColor={Colors.primaryColor}
                offTintColor={Colors.whiteColor}
                textInputStyle={{ ...styles.textFieldStyle }}
            />
        )
    }

    function submitButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                    setisLoading(true)
                    setTimeout(() => {
                        setisLoading(false)
                        navigation.push('BottomTabBar')
                    }, 2000);
                }}
                style={{ ...styles.submitButtonStyle }}
            >
                <Text style={{ ...Fonts.whiteColor18Medium }}>
                    Submit
                </Text>
            </TouchableOpacity >
        )
    }

    function verificationInfo() {
        return (
            <View style={{
                marginHorizontal: Sizes.fixPadding * 2.0,
                marginTop: Sizes.fixPadding,
                marginBottom: Sizes.fixPadding + 5.0,
            }}>
                <Text style={{ ...Fonts.blackColor22Medium }}>
                    Verification
                </Text>
                <Text style={{ ...Fonts.grayColor15Medium, marginTop: Sizes.fixPadding }}>
                    Enter the OTP code from the phone we just sent you.
                </Text>
            </View>
        )
    }

    function backArrow() {
        return (
            <MaterialIcons name="arrow-back" size={24} color="black"
                style={{ margin: Sizes.fixPadding * 2.0 }}
                onPress={() => navigation.pop()}
            />
        )
    }
}

const styles = StyleSheet.create({
    submitButtonStyle: {
        height: 55.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.primaryColor,
        marginTop: Sizes.fixPadding * 3.0
    },
    textFieldStyle: {
        borderBottomWidth: null,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        elevation: 2.0,
        ...Fonts.blackColor18Medium,
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 60,
        paddingTop: Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0,
    },
    resendInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: Sizes.fixPadding * 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    }
})

export default VerificationScreen;