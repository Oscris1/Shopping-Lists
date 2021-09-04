import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActiveListsScreen from '../screens/ActiveListsScreen';
import ArchivedListsScreen from '../screens/ArchivedListsScreens';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E8F6EF',
        tabBarPressColor: '#E8F6EF',
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle: {
          backgroundColor: '#E8F6EF',
        },
        tabBarStyle: {
          backgroundColor: '#07031A',
        },
      }}
      sceneContainerStyle={{
        backgroundColor: '#07031A',
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
