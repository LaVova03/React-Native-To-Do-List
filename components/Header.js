import React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";

export default function Header() {

    return (
        <View style={styles.main}>
            <Text style={styles.text}>To do list</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        height: 100,
        backgroundColor: 'silver',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: '700',
        color: 'red',
        textAlign: 'center'
    }
});