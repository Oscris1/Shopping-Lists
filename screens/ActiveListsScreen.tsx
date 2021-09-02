import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {MainProps} from '../navigation/RootNavigator';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const ActiveListsScreen = ({navigation}: MainProps) => {
  const items = useSelector((state: RootState) => state.activeLists.lists);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <View style={styles.container}>
      <Text>ActiveListsScreen</Text>
      <TouchableOpacity
        style={styles.newListButton}
        onPress={() => navigation.navigate('NewList')}>
        <Text style={{color: '#fff', fontSize: 30}}>+</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.itemList}
        data={items}
        renderItem={({item}) => {
          return (
            <View style={styles.element}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
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
  },
  newListButton: {
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 20,
    right: 20,

    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: 'tomato',
  },
  itemList: {},
  element: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ActiveListsScreen;
