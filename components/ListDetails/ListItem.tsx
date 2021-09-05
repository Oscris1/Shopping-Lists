import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {listItemsSelectors, RootState} from '../../store';
import {useAppDispatch} from '../../store';
import {removeItem, updateItem} from '../../store/list-items-slice';
import {removeListItem} from '../../store/lists-slice';

interface Props {
  itemID: string;
  listId: string;
  isArchived: boolean | undefined;
}

const ListItem: React.FC<Props> = ({itemID, listId, isArchived}) => {
  const dispatch = useAppDispatch();
  const item = useSelector((state: RootState) =>
    listItemsSelectors.selectById(state, itemID),
  );

  const removeItemHandler = () => {
    dispatch(removeListItem({id: listId, item: itemID}));
    dispatch(removeItem(itemID));
  };

  const CheckHandler = () => {
    if (item?.isChecked) {
      dispatch(updateItem({id: itemID, changes: {isChecked: false}}));
    } else {
      dispatch(updateItem({id: itemID, changes: {isChecked: true}}));
    }
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
      <View style={item?.isChecked ? styles.editBoxChecked : styles.editBox}>
        {!isArchived && (
          <TouchableOpacity onPress={CheckHandler} style={styles.pressBox}>
            {item?.isChecked && <View style={styles.pressBoxChecked} />}
          </TouchableOpacity>
        )}

        <Text style={{maxWidth: '50%', color: '#fff'}}>
          {item && item.name}
        </Text>
        {!isArchived && (
          <TouchableOpacity
            onPress={createTwoButtonAlert}
            style={styles.removeButton}>
            <Text>X</Text>
          </TouchableOpacity>
        )}
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
    backgroundColor: '#1B1B2F',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  editBoxChecked: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    padding: 12,
    backgroundColor: '#222831',
    borderWidth: 1,
    borderColor: '#5D8233',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  removeButton: {
    backgroundColor: '#E98580',
    width: 40,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressBox: {
    backgroundColor: '#fff',
    height: 26,
    width: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressBoxChecked: {
    backgroundColor: '#000',
    borderRadius: 6,
    height: 12,
    width: 12,
  },
});

export default ListItem;
