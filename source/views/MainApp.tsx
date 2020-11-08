import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function ListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List!</Text>
    </View>
  );
}

export function FavScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorite!</Text>
    </View>
  );
}

export function RandomScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Random!</Text>
      </View>
    );
}

export function MainScreen() {
    return(
        <Tab.Navigator initialRouteName="Tabs">
            <Tab.Screen name="One" component={ListScreen} />
            <Tab.Screen name="Two" component={FavScreen} />
            <Tab.Screen name="Three" component={RandomScreen} />
        </Tab.Navigator>
    )
}