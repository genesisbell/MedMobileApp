import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useAppSelector } from '../../app/hooks';
import MenuLeft from './MenuLeft';

//Stack Navigators
import Tabs from './Tabs';

const DrawerStack = createDrawerNavigator();

export default function Drawer() {
  const theme = useAppSelector(({ theme }) => theme.value);

  return (
    <DrawerStack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.mainBackgroundColor,
        },
      }}
      drawerContent={() => <MenuLeft />}
    >
      <DrawerStack.Screen name="Tabs" component={Tabs} />
    </DrawerStack.Navigator>
  );
}
