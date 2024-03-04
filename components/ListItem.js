import React from "react";
import {
    StyleSheet,
    Pressable,
    Text,
} from "react-native";

export default function ListItem({ el, deleteItem }) {

    return (
        <Pressable onPress={() => deleteItem(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%',
    }
});