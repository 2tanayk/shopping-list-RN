import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App=() => {
    const [items, setItems]= useState([
          {
            id: uuidv4(),
            text: 'Milk',
          },
          {
            id: uuidv4(),
            text: 'Eggs',
          },
          {
            id: uuidv4(),
            text: 'Bread',
          },
          {
            id: uuidv4(),
            text: 'Juice',
          },
    ]);

const deleteItem = (id) => {
    setItems(previousItems => {
        return previousItems.filter(item => item.id!=id);
    });
};

const addItem = (text) => {
    if (!text) {
        Alert.alert('No item entered','Please enter an item when adding to your shopping list',
        [{text: 'Ok',style: 'cancel',},],
          {cancelable: true},);
      } else {
        setItems(prevItems => {
          return [{id: uuidv4(), text}, ...prevItems];
        });
      }
};

return(
    <View style={styles.container}>
        {/* style={styles.text} */}
        {/* <Text>KEKW</Text> */}
        {/* <Image source={{uri: 'https://i0.wp.com/knowitinfo.com/wp-content/uploads/2020/12/cover4-1.jpg?w=800&ssl=1'}} style={styles.img}/> */}
        <Header title="Shopping List"/>
        <FlatList data={items} renderItem={({item})=> <ListItem item={item} deleteItem={deleteItem}/> }/>
        <AddItem addItem={addItem}/>
    </View>
);
};

const styles=StyleSheet.create({
     // justifyContent: 'center',
     // alignItems: 'center'
    container: {
        flex: 1,
    },

    // text:{
    //     color: 'darkslateblue',
    //     fontSize: 20,
    // },
    // img:{
    //     width:100,
    //     height:100,
    //     borderRadius:50,
    // },
});

export default App;