import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { FlatList } from "react-native-web";

export default function App() {

  const [list, setList] = useState([
    { text: 'Buy milk', key: '1' },
    { text: 'Buy bread', key: '2' },
    { text: 'Buy water', key: '3' },
    { text: 'Buy tomato', key: '4' },
  ]);

  const [text, setText] = useState('');

  const addToDo = (text) => {
    if (text.length !== 0) {
      setList((list) => {
        return [
          ...list,
          { text: text, key: Math.random().toString(36).substring(7) },
        ]
      });
      setText('')
    } else {
      alert('Add To Do')
    }
  };

  const deleteItem = (key) => {
    setList((list) => {
      return list.filter(list => list.key !== key)
    })
  }

  return (
    <View style={styles.wrap}>
      <Header />
      <Form addToDo={addToDo} text={text} setText={setText} />
      <View>
        <FlatList data={list} renderItem={({ item }) => (
          <ListItem el={item} deleteItem={deleteItem} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
  }
});
