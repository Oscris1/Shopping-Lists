import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../navigation/RootNavigator';

interface Props {
  name: string;
  id: string;
}

const ActiveList: React.FC<Props> = ({name, id}) => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ListDetails', {listId: id, listName: name});
      }}>
      <Text style={{color: '#fff'}}>{name}</Text>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.8,
    height: 150,
    borderWidth: 1,
    borderColor: '#6C7B95',
    marginVertical: 10,
  },
});

export default ActiveList;
