import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../navigation/RootNavigator';

interface Props {
  name: string;
  id: string;
  createdAt: number;
  itemsCount: number;
}

const ListCard: React.FC<Props> = ({name, id, createdAt, itemsCount}) => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  console.log(new Date(new Date(createdAt).getTime()));
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ListDetails', {listId: id, listName: name});
      }}>
      <Text style={styles.listName}>{name}</Text>
      <Text style={styles.itemsCount}>Items in list: {itemsCount}</Text>
      <Text style={styles.createdAt}>{new Date(createdAt).toDateString()}</Text>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: windowWidth * 0.8,
    minHeight: 50,
    borderWidth: 1,
    borderColor: '#6C7B95',
    marginVertical: 10,
    padding: 10,
  },
  listName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  createdAt: {
    color: '#6C7B95',
    marginTop: 12,
    paddingTop: 5,
    borderTopWidth: 1,
    borderColor: '#6C7B95',
  },
  itemsCount: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
});

export default ListCard;
