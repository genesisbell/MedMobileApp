import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

/** @Components */
import DrawerButton from './Components/DrawerButton';
import Drugs from '../Drugs/Screens/Drugs';
import Favorites from '../Favorites/Screens/Favorites';
import HeaderRight from './Components/HeaderRight';
import MenuLeft from './Components/MenuLeft';
import Settings from '../Settings/Screens/Settings';
import Urgencies from '../Urgencies/Screens/Urgencies';
import Values from '../Values/Screens/Values';
/** */

import { useAppSelector } from '../../app/hooks';

export type RootStackParams = {
  Favorites: undefined;
  Values: undefined;
  Urgencies: undefined;
  Drugs: undefined;
  Settings: undefined;
};

const DrawerNav = createDrawerNavigator<RootStackParams>();

export default function DrawerStack() {
  const theme = useAppSelector(({ theme }) => theme.value);

  return (
    <DrawerNav.Navigator
      initialRouteName="Favorites"
      drawerContent={(props) => <MenuLeft {...props} />}
      screenOptions={({ navigation }) => ({
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
        headerRight: () => <HeaderRight />,
      })}
    >
      <DrawerNav.Screen name="Favorites" component={Favorites} />
      <DrawerNav.Screen name="Values" component={Values} />
      <DrawerNav.Screen name="Urgencies" component={Urgencies} />
      <DrawerNav.Screen name="Drugs" component={Drugs} />
      <DrawerNav.Screen name="Settings" component={Settings} />
    </DrawerNav.Navigator>
  );
}
