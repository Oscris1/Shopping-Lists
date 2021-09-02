import React, {useState} from 'react';
import {useAppDispatch} from '../store';
import {addNewList} from '../store/active-lists-slice';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const NewListScreen = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="name"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(addNewList(name))}>
        <Text>Dodaj</Text>
      </TouchableOpacity>
      <Text>NewListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 30,
    backgroundColor: 'pink',
  },
});

export default NewListScreen;
