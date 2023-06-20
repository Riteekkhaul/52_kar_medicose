import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text, FlatList } from "react-native";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';

const earningList = [
    {
        id: '1',
        earningAmount: 3.50,
    },
    {
        id: '2',
        earningAmount: 5.70,
    },
    {
        id: '3',
        earningAmount: 3.90,
    },
    {
        id: '4',
        earningAmount: 8.75,
    },
    {
        id: '5',
        earningAmount: 9.0,
    },
    {
        id: '6',
        earningAmount: 7.30,
    },
    {
        id: '7',
        earningAmount: 5.10,
    },
    {
        id: '8',
        earningAmount: 7.50,
    },
    {
        id: '9',
        earningAmount: 8.50,
    },
    {
        id: '10',
        earningAmount: 10.0,
    },
];

const WalletScreen = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.earningListItemWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="fastfood" size={29} color={Colors.primaryColor} />
                    <Text style={{ ...Fonts.blackColor18Medium, marginLeft: Sizes.fixPadding }}>
                        Order Delivered
                    </Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ ...Fonts.grayColor18Medium }}>
                        {item.earningAmount.toFixed(2)}
                    </Text>
                    <Text style={{ ...Fonts.darkPinkColor16Medium, }}>
                        Earning
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {earningInfo()}
                <View style={styles.earningListWrapStyle}>
                    <FlatList
                        data={earningList}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingTop: Sizes.fixPadding * 2.0,
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )

    function earningInfo() {
        return (
            <View style={styles.totalEarningInfoWrapStyle}>
                <Text style={{ ...Fonts.whiteColor25Medium }}>
                    Earning
                </Text>
                <Text style={{ ...Fonts.whiteColor25Medium, paddingTop: Sizes.fixPadding - 3.0 }}>
                    $190.8
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    earningListWrapStyle: {
        marginTop: -10.0,
        backgroundColor: '#F4F4F4',
        borderTopLeftRadius: Sizes.fixPadding + 3.0,
        borderTopRightRadius: Sizes.fixPadding + 3.0,
        flex: 1,
    },
    earningListItemWrapStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding,
    },
    totalEarningInfoWrapStyle: {
        backgroundColor: Colors.primaryColor,
        height: 120.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    animatedView: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 0,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding + 5.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default WalletScreen;
