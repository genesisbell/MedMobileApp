import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useAppSelector } from '../../app/hooks';
import MenuLeft from './Components/MenuLeft';

//Stack Navigators
import BottomTabStack from './BottomTabStack';

const DrawerNav = createDrawerNavigator();

export default function DrawerStack() {
  const theme = useAppSelector(({ theme }) => theme.value);

  return (
    <DrawerNav.Navigator
      initialRouteName="BottomTabStack"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.backgroundPrmColor,
        },
      }}
      drawerContent={() => <MenuLeft />}
    >
      <DrawerNav.Screen name="BottomTabStack" component={BottomTabStack} />
    </DrawerNav.Navigator>
  );
}
