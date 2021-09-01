import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ActiveListsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ActiveListsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActiveListsScreen;
