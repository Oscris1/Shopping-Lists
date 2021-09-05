import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {ListDetailsProps} from '../navigation/RootNavigator';
import {activeListsSelectors, RootState, useAppDispatch} from '../store';
import {AddListItem, ArchiveList} from '../store/lists-slice';
import {addItem} from '../store/list-items-slice';
import ListItem from '../components/ListDetails/ListItem';

const ListDetailsScreen = ({route}: ListDetailsProps) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const listId = route.params.listId;
  const list = useSelector((state: RootState) =>
    activeListsSelectors.selectById(state, listId),
  );
  const isArchived = list?.isArchived;
  const listItemsIds = list?.listItems;

  const addItemHandler = () => {
    if (name) {
      const id = uuidv4();
      dispatch(AddListItem({id: route.params.listId, item: id}));
      dispatch(addItem({id, name, isChecked: false}));
      Keyboard.dismiss();
      setName('');
    }
  };

  const changeToArchivedHandler = () => {
    console.log('archived');
    dispatch(ArchiveList(listId));
  };

  const ArchiveAlert = () =>
    Alert.alert(
      'Archive the list',
      'Are you sure you want to archive the list',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: changeToArchivedHandler},
      ],
    );

  return (
    <View style={styles.container}>
      {!isArchived && (
        <View style={styles.listNameBox}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Item"
            placeholderTextColor="#6C7B95"
          />

          <TouchableOpacity style={styles.button} onPress={addItemHandler}>
            <Text>Add!</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        keyboardShouldPersistTaps={'handled'}
        style={styles.flatlist}
        data={listItemsIds}
        renderItem={({item}) => (
          <ListItem
            itemID={item}
            listId={route.params.listId}
            isArchived={isArchived}
          />
        )}
        keyExtractor={item => item}
      />
      {!isArchived && (
        <View style={styles.footer}>
          <TouchableOpacity onPress={ArchiveAlert} style={styles.archiveButton}>
            <Text style={{color: '#fff'}}>Archive</Text>
          </TouchableOpacity>
        </View>
      )}
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
  footer: {
    borderTopWidth: 1,
    borderColor: '#6C7B95',
    width: '100%',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  archiveButton: {
    width: '40%',
    height: 30,
    borderWidth: 1,
    borderColor: '#E98580',
    backgroundColor: '#150000',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 20,
  },
});

export default ListDetailsScreen;
