import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

/** @Components */
import DrawerButton from './Components/DrawerButton';
import Drugs from '../Drugs/Screens/Drugs';
import Favorites from '../Favorites/Screens/Favorites';
import HeaderRight from './Components/HeaderRight';
import MenuLeft from './Components/MenuLeft';
import Settings from '../Settings/Screens/Settings';
import Solutions from '../Solutions/Screen/Solutions';
import Urgencies from '../Urgencies/Screens/Urgencies';
import Values from '../Values/Screens/Values';
/** */

import { useAppSelector, getLangState, getThemeState } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export type RootStackParams = {
  // Favorites: undefined;
  Values: undefined;
  Solutions: undefined;
  // Urgencies: undefined;
  // Drugs: undefined;
  Settings: undefined;
};

const DrawerNav = createDrawerNavigator<RootStackParams>();

export default function DrawerStack() {
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  return (
    <DrawerNav.Navigator
      initialRouteName="Values"
      drawerContent={(props) => <MenuLeft {...props} />}
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: theme.headerBgColor,
        },
        headerTitleStyle: {
          color: theme.headerTextColor,
        },
        drawerStyle: {
          backgroundColor: theme.backgroundPrmColor,
        },
        headerLeft: () => <DrawerButton navigation={navigation} />,
        headerRight: () => <HeaderRight route={route}/>,
      })}
    >
      {/* <DrawerNav.Screen name="Favorites" component={Favorites} /> */}
      <DrawerNav.Screen
        name="Values"
        component={Values}
        options={{title: language.values.values}}
      />
      {/* <DrawerNav.Screen name="Urgencies" component={Urgencies} /> */}
      {/* <DrawerNav.Screen name="Drugs" component={Drugs} /> */}
      <DrawerNav.Screen 
        name="Solutions"
        component={Solutions}
        options={{title: language.solutions.solutions}}
      />
      <DrawerNav.Screen 
        name="Settings"
        component={Settings}
        options={{title: language.settings.settings}}
      />
    </DrawerNav.Navigator>
  );
}
