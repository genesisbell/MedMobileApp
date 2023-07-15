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

export type RootStackParams = {
  BottomTabStack: undefined;
  Settings: undefined;
  Favorites: undefined;
  Urgencies: undefined;
};

const DrawerNav = createDrawerNavigator<RootStackParams>();

export default function DrawerStack() {
  const theme = useAppSelector(({ theme }) => theme.value);

  return (
    <DrawerNav.Navigator
      initialRouteName="Settings"
      drawerContent={(props) => <MenuLeft {...props} />}
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: theme.headerBgColor,
        },
        headerTitleStyle: {
          color: theme.headerTextColor,
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        headerLeft: () => <DrawerButton navigation={navigation} />,
      })}
    >
      <DrawerNav.Screen name="BottomTabStack" component={BottomTabStack} />
      <DrawerNav.Screen name="Settings" component={Settings} />
      <DrawerNav.Screen name="Favorites" component={Favorites} />
      <DrawerNav.Screen name="Urgencies" component={Urgencies} />
    </DrawerNav.Navigator>
  );
}
