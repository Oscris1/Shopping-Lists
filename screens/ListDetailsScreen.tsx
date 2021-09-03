import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';

import {ListDetailsProps} from '../navigation/RootNavigator';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../store';
import {v4 as uuidv4} from 'uuid';
import {activeListsSelectors, RootState} from '../store';
import {updateList} from '../store/active-lists-slice';
import {addItem} from '../store/list-items-slice';
import ListItem from '../components/ListDetails/ListItem';

const ListDetailsScreen = ({route}: ListDetailsProps) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const list = useSelector(
    (state: RootState) =>
      activeListsSelectors.selectById(state, route.params.listId)?.listItems,
  );

  const addItemWrapper = () => {
    if (name) {
      const id = uuidv4();
      dispatch(updateList({id: route.params.listId, item: id}));
      dispatch(addItem({id, name, isChecked: false}));
      Keyboard.dismiss();
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listNameBox}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Item"
          placeholderTextColor="#6C7B95"
        />
        <TouchableOpacity style={styles.button} onPress={addItemWrapper}>
          <Text>Add!</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyboardShouldPersistTaps={'handled'}
        style={styles.flatlist}
        data={list}
        renderItem={({item}) => (
          <ListItem itemID={item} listId={route.params.listId} />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#07031A',
    flex: 1,
  },
  input: {
    backgroundColor: '#1B1B2F',
    width: '50%',
    color: '#fff',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 30,
    paddingLeft: 20,
  },
  listNameBox: {
    marginTop: 0,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#6C7B95',
  },
  button: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 1,
    borderColor: 'black',
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
  },
  flatlist: {},
});

export default ListDetailsScreen;
