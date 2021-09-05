import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import ActiveList from '../components/ActiveList';
import {activeListsSelectors} from '../store';

const ArchivedListsScreen = () => {
  let lists = useSelector(activeListsSelectors.selectAll);

  const [toggle, setToggle] = useState<boolean>(true);

  const changeSortDirection = () => {
    setToggle(!toggle);
    return lists.reverse();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sortButton} onPress={changeSortDirection}>
        <Text style={{color: '#fff'}}>Change sort direction</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.itemList}
        data={lists.filter(item => item.isArchived === true)}
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
  sortButton: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
  },
  itemList: {},
});

export default ArchivedListsScreen;
