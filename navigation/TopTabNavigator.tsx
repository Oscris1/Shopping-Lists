import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActiveListsScreen from '../screens/ActiveListsScreen';
import ArchivedListsScreen from '../screens/ArchivedListsScreens';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarPressColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Tab.Screen
        name="ShopLists"
        component={ActiveListsScreen}
        options={{title: 'Active Lists'}}
      />
      <Tab.Screen name="Archived" component={ArchivedListsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
