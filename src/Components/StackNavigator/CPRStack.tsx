import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

/** @Components */
import CPR from '../CPR/Screens/CPR';
import Logs from '../CPR/Screens/Logs';
/** */

import { getLangState, getThemeState } from '../../app/hooks';
import { RootState } from '../../app/store';

export type CPRStackParams = {
  CPR: undefined;
  Logs: undefined;
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
      <Stack.Screen name="CPR" component={CPR} options={{ title: language.cpr.cpr }} />
      <Stack.Screen name="Logs" component={Logs} options={{ title: language.cpr.cpr }} />
    </Stack.Navigator>
  );
}
