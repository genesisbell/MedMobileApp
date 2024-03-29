import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

/** @Components */
import CPR from '../CPR/Screens/CPR';
import Logs from '../CPR/Screens/Logs';
/** */

import { getLangState, getThemeState } from '../../app/hooks';
import { RootState } from '../../app/store';
import DrawerButton from './Components/DrawerButton';
import HeaderRight from './Components/HeaderRight';
import { headerOptions } from './DrawerStack';
import Log from '../CPR/Screens/Log';
import { ReadDirItem } from 'react-native-fs';
import Settings from '../CPR/Screens/Settings';

export type CPRStackParams = {
  CPR: undefined;
  Logs: undefined;
  Log: {
    filePath: string,
    fileName: string,
  };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<CPRStackParams>();

export default function CPRStack() {
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  return (
    <Stack.Navigator
      initialRouteName="CPR"
      screenOptions={() => ({
        headerShown: false
      })}
    >
      <Stack.Screen
        name="CPR"
        component={CPR}
        options={({navigation, route}) => ({
          title: language.cpr.cpr,
          ...headerOptions({navigation, route, theme}),
        })}
        />
      <Stack.Screen
        name="Logs"
        component={Logs}
        options={({navigation, route}) => ({
          title: language.cpr.logs,
          ...headerOptions({
            navigation,
            route,
            theme,
            canGoBack: true,
          }),
        })}
      />
      <Stack.Screen
        name="Log"
        component={Log}
        options={({navigation, route}) => ({
          title: language.cpr.logs,
          ...headerOptions({
            navigation,
            route,
            theme,
            canGoBack: true,
          }),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation, route}) => ({
          title: language.settings.settings,
          ...headerOptions({
            navigation,
            route,
            theme,
            canGoBack: true,
          }),
        })}
      />
    </Stack.Navigator>
  );
}
