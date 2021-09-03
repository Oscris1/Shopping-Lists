import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
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
      dispatch(addItem({id, name}));
    }
  };

  return (
    <View>
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
        style={{}}
        data={list}
        renderItem={({item}) => <ListItem itemID={item} />}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addItemContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 3,
    backgroundColor: 'lightgrey',
  },
  input: {
    backgroundColor: '#fff',
    width: '50%',
  },
  listNameBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    backgroundColor: '#B8DFD8',
    borderBottomEndRadius: 20,
    //borderTopEndRadius: 20,
  },
});

export default ListDetailsScreen;
