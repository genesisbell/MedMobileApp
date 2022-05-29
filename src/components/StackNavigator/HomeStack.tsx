import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from '../Home/HomeScreen';

export type HomeStackParms = {
  HomeScreen: any;
}

const Stack = createNativeStackNavigator<HomeStackParms>();

export default function HomeStack() {

  return (
    <Stack.Navigator 
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
    </Stack.Navigator>
  );
}