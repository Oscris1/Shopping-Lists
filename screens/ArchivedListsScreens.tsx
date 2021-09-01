import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ArchivedListsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ArchivedListsScreen</Text>
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

export default ArchivedListsScreen;
