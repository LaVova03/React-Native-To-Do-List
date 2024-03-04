import React from "react";
import {
    StyleSheet,
    TextInput,
    Text,
    Pressable,
    View,
} from "react-native";

export default function Form({ addToDo, setText, text }) {

    const onChage = (text) => {
        setText(text);
    }

    return (
        <View style={styles.wrap_btn}>
            <TextInput style={styles.input} value={text} onChangeText={onChage} placeholder='Write your task' />
            <Pressable style={styles.btn} onPress={() => addToDo(text)}>
                <Text style={styles.text_btn}>Add task</Text>
            </Pressable >
        </View >
    );
}

const styles = StyleSheet.create({
    wrap_btn: {
        textAlign: 'center'
    },
    input: {
        borderBottomWidth: 1,
        padding: 10,
        borderColor: 'black',
        marginVertical: 10,
        marginHorizontal: '20%',
        width: '60%',
        placeholderTextColor: 'gray',
    },
    btn: {
        width: 'max-content',
        margin: 'auto'
    },
    text_btn: {
        color: 'green',
        fontSize: 20,
        fontWeight: '700',
    }
});