import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

/** @Components */
import Settings from '../Settings/Screens/Settings';
import { headerOptions } from './DrawerStack';
/** */

import { getLangState, getThemeState } from '../../app/hooks';
import { RootState } from '../../app/store';

export type SettingsStackParams = {
  Settings: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParams>();

export default function SettingsStack() {
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={() => ({
        headerShown: false
      })}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation, route}) => ({
          title: language.settings.settings,
          ...headerOptions({navigation, route, theme}),
        })}
        />
    </Stack.Navigator>
  );
}
