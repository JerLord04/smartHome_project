import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App_home from './screens/App_home';
import Bed_room from './screens/Bed_room';
import Kitchen from './screens/Kitchen';
import Living_room from './screens/Living_room';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={App_home}
        options={
          {
            headerShown: false,
          }
        }
      />
      <Stack.Screen name="Bedroom" component={Bed_room}
        options={
          {
            title: '',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#425F57',
            },
          }
        } />
      <Stack.Screen name="Kitchen" component={Kitchen}
        options={
          {
            title: '',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#425F57',
            },
          }
        } />
      <Stack.Screen name="Livingroom" component={Living_room}
        options={
          {
            title: '',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#425F57',
            },
          }
        } />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

