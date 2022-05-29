import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Stack Navigators
import Drawer from './components/StackNavigator/Drawer';

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
