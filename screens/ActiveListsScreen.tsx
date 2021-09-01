import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ActiveListsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ActiveListsScreen</Text>
      <TouchableOpacity
        style={styles.newListButton}
        onPress={() => console.log('button pressed')}>
        <Text style={{color: '#fff', fontSize: 30}}>+</Text>
      </TouchableOpacity>
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
});

export default ActiveListsScreen;
