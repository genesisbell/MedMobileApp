import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

/** @Components */
import BottomTabStack from './BottomTabStack';
import Settings from '../Settings/Screens/Settings';
import DrawerButton from './Components/DrawerButton';
import Favorites from '../Favorites/Screens/Favorites';
import Urgencies from '../Urgencies/Screens/Urgencies';
import MenuLeft from './Components/MenuLeft';
/** */

import { useAppSelector } from '../../app/hooks';
import Drugs from '../Drugs/Screens/Drugs';

export type RootStackParams = {
  BottomTabStack: undefined;
  Favorites: undefined;
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
      })}
    >
      <DrawerNav.Screen name="Favorites" component={Favorites} />
      <DrawerNav.Screen name="Urgencies" component={Urgencies} />
      <DrawerNav.Screen name="Drugs" component={Drugs} />
      <DrawerNav.Screen name="Settings" component={Settings} />
      <DrawerNav.Screen name="BottomTabStack" component={BottomTabStack} />
    </DrawerNav.Navigator>
  );
}
