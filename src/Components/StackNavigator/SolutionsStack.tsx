import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

/** @Components */
import Solutions from '../Solutions/Screen/Solutions';
import { headerOptions } from './DrawerStack';
/** */

import { getLangState, getThemeState } from '../../app/hooks';
import { RootState } from '../../app/store';

export type SolutionsStackParams = {
  Solutions: undefined;
};

const Stack = createNativeStackNavigator<SolutionsStackParams>();

export default function SolutionsStack() {
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  return (
    <Stack.Navigator
      initialRouteName="Solutions"
      screenOptions={() => ({
        headerShown: false
      })}
    >
      <Stack.Screen
        name="Solutions"
        component={Solutions}
        options={({navigation, route}) => ({
          title: language.solutions.solutions,
          ...headerOptions({navigation, route, theme}),
        })}
        />
    </Stack.Navigator>
  );
}
