import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ActiveList from '../components/ActiveList';
import {activeListsSelectors} from '../store';

const ArchivedListsScreen = () => {
  const lists = useSelector(activeListsSelectors.selectAll);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.itemList}
        data={lists.filter(item => item.isArchived === true)}
        renderItem={({item}) => <ActiveList name={item.name} id={item.id} />}
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
