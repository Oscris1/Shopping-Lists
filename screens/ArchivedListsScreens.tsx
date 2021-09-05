import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import SortButton from '../components/SortButton';
import {activeListsSelectors} from '../store';
import {ListInterface} from '../store/lists-slice';

const ArchivedListsScreen = () => {
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
      <SortButton toggle={toggle} onPress={() => setToggle(!toggle)} />
      <FlatList
        style={styles.itemList}
        data={flatListData.filter(item => item.isArchived === true)}
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
  itemList: {},
});

export default ArchivedListsScreen;
