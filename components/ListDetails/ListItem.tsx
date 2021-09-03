import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {listItemsSelectors, RootState} from '../../store';

interface Props {
  itemID: string;
}

const ListItem: React.FC<Props> = ({itemID}) => {
  const item = useSelector((state: RootState) =>
    listItemsSelectors.selectById(state, itemID),
  );

  return (
    <View style={styles.container}>
      <Text>{item && item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItem;
