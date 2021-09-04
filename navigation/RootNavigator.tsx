import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
  StackNavigationProp,
} from '@react-navigation/stack';
import TopTabNavigator from './TopTabNavigator';
import NewListScreen from '../screens/NewListScreen';
import ListDetailsScreen from '../screens/ListDetailsScreen';

type StackParamList = {
  Main: undefined;
  NewList: undefined;
  ListDetails: {listId: string; listName: string};
};

const Stack = createStackNavigator<StackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#07031A'},
        animationEnabled: false,
      }}>
      <Stack.Screen
        name="Main"
        component={TopTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewList"
        component={NewListScreen}
        options={{
          title: 'Create New List',
          headerStyle: {
            backgroundColor: '#07031A',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="ListDetails"
        component={ListDetailsScreen}
        options={({route}) => ({
          title: route.params.listName,
          headerStyle: {
            backgroundColor: '#07031A',
          },
          headerTintColor: '#fff',
        })}
      />
    </Stack.Navigator>
  );
};

export type MainScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Main'
>;

export type MainProps = StackScreenProps<StackParamList, 'Main'>;
export type ListDetailsProps = StackScreenProps<StackParamList, 'ListDetails'>;

export default RootNavigator;
