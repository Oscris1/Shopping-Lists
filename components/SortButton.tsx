import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  toggle: boolean;
  onPress(): void;
}

const SortButton: React.FC<Props> = ({toggle, onPress}) => {
  return (
    <TouchableOpacity style={styles.sortButton} onPress={onPress}>
      <Text style={{color: '#fff'}}>
        {toggle ? 'from the newest' : 'from the oldest'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sortButton: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
  },
});

export default SortButton;
