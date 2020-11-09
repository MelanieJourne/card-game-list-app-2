import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import ListScreen from './ListScreen/ListScreen';
import FavoriteScreen from './FavoriteScreen/FavoriteScreen';
import RandomScreen from './RandomScreen/RandomScreen';
import { colors } from '../assets/theme/colors';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return(
        <Tab.Navigator 
          initialRouteName="Tabs"
          tabBarOptions={{
            activeTintColor: colors.purple_dark,
            inactiveTintColor: colors.blue_gradient,
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName:string = ''; 
              if(route.name === 'Liste') {
                iconName = focused ? 'list-circle-sharp' : 'list-circle-outline';
              }
              if(route.name === 'Favoris') {
                iconName = focused ? 'md-star-sharp' : 'md-star-outline';
              }
              if(route.name === 'Surprise') {
                iconName = 'color-wand-sharp';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
            <Tab.Screen name="Liste" component={ListScreen} />
            <Tab.Screen name="Favoris" component={FavoriteScreen} />  
            <Tab.Screen name="Surprise" component={RandomScreen} />
        </Tab.Navigator>
    )
}