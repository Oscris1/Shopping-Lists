import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {MainProps} from '../navigation/RootNavigator';
import {useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import {activeListsSelectors} from '../store';
import SortButton from '../components/SortButton';
import {ListInterface} from '../store/lists-slice';

const ActiveListsScreen = ({navigation}: MainProps) => {
  const lists = useSelector(activeListsSelectors.selectAll);
  const reversedLists = [...lists].reverse();
  const [toggle, setToggle] = useState<boolean>(true);

  const listsToDisplay = (toggle: boolean): ListInterface[] => {
    if (toggle) {
      return lists;
    } else {
      return reversedLists;
    }
  };

  const flatListData = listsToDisplay(toggle);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newListButton}
        onPress={() => navigation.navigate('NewList')}>
        <Text style={{color: '#07031A', fontSize: 30}}>+</Text>
      </TouchableOpacity>

      <SortButton toggle={toggle} onPress={() => setToggle(!toggle)} />

      <FlatList
        style={styles.itemList}
        data={flatListData.filter(item => item.isArchived === false)}
        renderItem={({item}) => (
          <ListCard
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
  itemList: {},
});

export default ActiveListsScreen;
