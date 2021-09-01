import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import TopTabNavigator from './TopTabNavigator';
import NewListScreen from '../screens/NewListScreen';

type StackParamList = {
  Main: undefined;
  NewList: undefined;
};

export type MainProps = NativeStackScreenProps<StackParamList, 'Main'>;

const Stack = createNativeStackNavigator<StackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TopTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="NewList" component={NewListScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
