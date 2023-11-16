import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

/** @Components */
import Values from '../Values/Screens/Values';
import { headerOptions } from './DrawerStack';
/** */

import { getLangState, getThemeState } from '../../app/hooks';
import { RootState } from '../../app/store';

export type ValuesStackParams = {
  Values: undefined;
};

const Stack = createNativeStackNavigator<ValuesStackParams>();

export default function ValuesStack() {
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  return (
    <Stack.Navigator
      initialRouteName="Values"
      screenOptions={() => ({
        headerShown: false
      })}
    >
      <Stack.Screen
        name="Values"
        component={Values}
        options={({navigation, route}) => ({
          title: language.values.values,
          ...headerOptions({navigation, route, theme}),
        })}
        />
    </Stack.Navigator>
  );
}
