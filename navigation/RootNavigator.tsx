import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TopTabNavigator from './TopTabNavigator';
import NewListScreen from '../screens/NewListScreen';
import ListDetailsScreen from '../screens/ListDetailsScreen';

type StackParamList = {
  Main: undefined;
  NewList: undefined;
  ListDetails: {listId: string; listName: string};
};

const Stack = createNativeStackNavigator<StackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TopTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewList"
        component={NewListScreen}
        options={{title: 'Create New List'}}
      />

      <Stack.Screen
        name="ListDetails"
        component={ListDetailsScreen}
        options={({route}) => ({title: route.params.listName})}
      />
    </Stack.Navigator>
  );
};

export type MainScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Main'
>;

export type MainProps = NativeStackScreenProps<StackParamList, 'Main'>;
export type ListDetailsProps = NativeStackScreenProps<
  StackParamList,
  'ListDetails'
>;

export default RootNavigator;
