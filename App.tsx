import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigator from './navigation/TopTabNavigator';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
