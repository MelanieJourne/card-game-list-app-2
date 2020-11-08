import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListScreen from './ListScreen/ListScreen';
import FavoriteScreen from './FavoriteScreen/FavoriteScreen';
import RandomScreen from './RandomScreen/RandomScreen';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return(
        <Tab.Navigator initialRouteName="Tabs">
            <Tab.Screen name="One" component={ListScreen} />
            <Tab.Screen name="Two" component={FavoriteScreen} />
            <Tab.Screen name="Three" component={RandomScreen} />
        </Tab.Navigator>
    )
}