import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import AnimacionesScreen from '../Animaciones/AnimacionesScreen';

export type AnimacionesStackParams = {
    AnimacionesScreen: undefined;
}

const Stack = createNativeStackNavigator<AnimacionesStackParams>();

export default function AnimacionesStack() {
  return (
    <Stack.Navigator 
        initialRouteName='AnimacionesScreen'
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name={'AnimacionesScreen'} component={AnimacionesScreen}/>
    </Stack.Navigator>
  );
}