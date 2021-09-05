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
          placeholderTextColor="#6C7B95"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(
              addList({
                id: uuidv4(),
                name: listName,
                listItems: [],
                isArchived: false,
                createdAt: new Date().getTime(),
              }),
            );
            setListName('');
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
    backgroundColor: '#07031A',
  },
  listNameBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#1B1B2F',
    width: '50%',
    color: '#fff',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 30,
    paddingLeft: 20,
  },

  button: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 1,
    borderColor: 'black',
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
  },
});

export default NewListScreen;
