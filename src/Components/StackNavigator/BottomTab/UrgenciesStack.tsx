import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/** @Components */
import Urgencies from '../../Urgencies/Screens/Urgencies';
/** */

export type UrgenciesStackParms = {
  Urgencies: undefined;
};

const Stack = createNativeStackNavigator<UrgenciesStackParms>();

export default function UrgenciesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Urgencies"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Urgencies'} component={Urgencies} />
    </Stack.Navigator>
  );
}
