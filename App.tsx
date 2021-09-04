import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import store from './store';
import {persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={DarkTheme}>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
