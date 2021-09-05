import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {MainProps} from '../navigation/RootNavigator';
import {useSelector} from 'react-redux';
import ActiveList from '../components/ActiveList';
import {activeListsSelectors} from '../store';

const ActiveListsScreen = ({navigation}: MainProps) => {
  const lists = useSelector(activeListsSelectors.selectAll);
  const [toggle, setToggle] = useState<boolean>(true);

  const changeSortDirection = () => {
    setToggle(!toggle);
    return lists.reverse();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newListButton}
        onPress={() => navigation.navigate('NewList')}>
        <Text style={{color: '#07031A', fontSize: 30}}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={changeSortDirection} style={styles.sortButton}>
        <Text style={{color: '#fff'}}>Change sort direction</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.itemList}
        data={lists.filter(item => item.isArchived === false)}
        renderItem={({item}) => (
          <ActiveList
            name={item.name}
            id={item.id}
            createdAt={item.createdAt}
            itemsCount={item.listItems.length}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#07031A',
  },
  newListButton: {
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,

    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#E8F6EF',
  },
  sortButton: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
  },
  itemList: {},
});

export default ActiveListsScreen;
