import React, {useState} from 'react';
import {useAppDispatch} from '../store';
import {addList} from '../store/active-lists-slice';
import {v4 as uuidv4} from 'uuid';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NewListScreen = () => {
  const dispatch = useAppDispatch();
  const [listName, setListName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.listNameBox}>
        <TextInput
          style={styles.input}
          onChangeText={setListName}
          value={listName}
          placeholder="List Name"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(
              addList({
                id: uuidv4(),
                name: listName,
                listItems: [],
              }),
            );
          }}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listNameBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#fff',
    width: 200,
  },
  button: {
    padding: 15,
    backgroundColor: '#B8DFD8',
    borderBottomEndRadius: 20,
    //borderTopEndRadius: 20,
  },
});

export default NewListScreen;
