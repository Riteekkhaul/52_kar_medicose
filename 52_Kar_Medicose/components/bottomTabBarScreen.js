import React, { useState, useCallback } from "react";
import { View, Text, BackHandler, StyleSheet } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Sizes, Fonts } from "../constant/styles";
import ProfileScreen from "../screens/profile/profileScreen";
import WalletScreen from "../screens/wallet/walletScreen";
import OrderScreen from "../screens/order/orderScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

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
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0)
        }, 1000)
    }

    const [backClickCount, setBackClickCount] = useState(0);

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: Colors.primaryColor,
                    tabBarInactiveTintColor: Colors.grayColor,
                    tabBarLabelStyle: {
                        fontSize: 14.0,
                        fontFamily: 'Roboto_Regular',
                    },
                    tabBarStyle: { ...styles.tabBarStyle, },
                }}
            >
                <Tab.Screen
                    name={'Order'}
                    component={OrderScreen}
                    options={{
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shopping" size={24} color={color} />
                    }}
                />
                <Tab.Screen
                    name={'Wallet'}
                    component={WalletScreen}
                    options={{
                        tabBarIcon: ({ color }) => <MaterialIcons name="account-balance-wallet" size={27} color={color} />
                    }}
                />
                <Tab.Screen
                    name={'Profile'}
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => <MaterialIcons name="person" size={27} color={color} />
                    }}
                />
            </Tab.Navigator>
            {exitInfo()}
        </>
    )

    function exitInfo() {
        return (
            backClickCount == 1
                ?
                <View style={[styles.animatedView]}>
                    <Text style={{ ...Fonts.whiteColor16Regular }}>
                        Press back once again to exit
                    </Text>
                </View>
                :
                null
        )
    }
}

const styles = StyleSheet.create({
    animatedView: {
        backgroundColor: '#333333',
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
    tabBarStyle: {
        height: 70.0,
        elevation: 3.0,
        borderTopColor: 'gray',
        borderTopWidth: 0.20,
        borderTopLeftRadius: Sizes.fixPadding + 10.0,
        borderTopRightRadius: Sizes.fixPadding + 10.0,
        paddingTop: Sizes.fixPadding - 5.0,
        paddingBottom: Sizes.fixPadding - 5.0
    }
})

export default TabNavigator;