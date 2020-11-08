/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './source/views/HomeScreen/HomeScreen';
import { MainScreen } from './source/views/MainApp';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Zero" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
