import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigator from './navigation/TopTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
};

export default App;
