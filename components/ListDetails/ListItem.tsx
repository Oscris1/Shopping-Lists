import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {listItemsSelectors, RootState} from '../../store';
import {useAppDispatch} from '../../store';
import {removeItem} from '../../store/list-items-slice';
import {removeListItem} from '../../store/active-lists-slice';

interface Props {
  itemID: string;
  index: number;
  listId: string;
}

const ListItem: React.FC<Props> = ({itemID, index, listId}) => {
  const dispatch = useAppDispatch();
  const item = useSelector((state: RootState) =>
    listItemsSelectors.selectById(state, itemID),
  );

  const removeItemHandler = () => {
    console.log(itemID);
    dispatch(removeListItem({id: listId, item: itemID}));
    dispatch(removeItem(itemID));
  };

  const createTwoButtonAlert = () =>
    Alert.alert('Remove Item', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: removeItemHandler},
    ]);

  return (
    <View style={styles.container}>
      <View style={styles.editBox}>
        <Text>{index}.</Text>
        <Text style={{maxWidth: '50%'}}>{item && item.name}</Text>
        <TouchableOpacity
          onPress={createTwoButtonAlert}
          style={styles.removeButton}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editBox: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    padding: 12,
    backgroundColor: '#FFF8E5',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '60%',
    borderRadius: 5,
    height: '80%',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  removeButton: {
    backgroundColor: 'red',
    width: 40,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItem;
