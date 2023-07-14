import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Stack Navigators
import DrawerStack from './Components/StackNavigator/DrawerStack';

export default function AppRouter() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}
