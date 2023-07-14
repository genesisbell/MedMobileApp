import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/** @Components */
import Formulas from '../../Formulas/Screens/Formulas';
/** */

export type FormulasStackParms = {
  Formulas: undefined;
};

const Stack = createNativeStackNavigator<FormulasStackParms>();

export default function FormulasStack() {
  return (
    <Stack.Navigator
      initialRouteName="Formulas"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Formulas'} component={Formulas} />
    </Stack.Navigator>
  );
}
