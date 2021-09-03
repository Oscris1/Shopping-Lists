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
        />
        <TouchableOpacity style={styles.button} onPress={addItemWrapper}>
          <Text>Add!</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyboardShouldPersistTaps={'handled'}
        style={styles.flatlist}
        data={list}
        renderItem={({item, index}) => (
          <ListItem
            index={index + 1}
            itemID={item}
            listId={route.params.listId}
          />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    width: '50%',
  },
  listNameBox: {
    marginTop: 0,
    paddingVertical: 12,
    backgroundColor: '#FFF8E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    backgroundColor: '#B8DFD8',
    borderBottomEndRadius: 20,
  },
  flatlist: {},
});

export default ListDetailsScreen;
