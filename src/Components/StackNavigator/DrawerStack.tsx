import React from 'react';
import { Animated } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

/** @Components */
import BackButton from './Components/BackButton';
import DrawerButton from './Components/DrawerButton';
import HeaderRight from './Components/HeaderRight';
import MenuLeft from './Components/MenuLeft';
import CPRStack from './CPRStack';
import ValuesStack from './ValuesStack';
import SolutionsStack from './SolutionsStack';
import SettingsStack from './SettingsStack';
/** */

import { getLangState, getThemeState } from '../../app/hooks';
import { RootState } from '../../app/store';

export type RootStackParams = {
  CPRStack: undefined;
  ValuesStack: undefined;
  SolutionsStack: undefined;
  SettingsStack: undefined;
};

const DrawerNav = createDrawerNavigator<RootStackParams>();

export default function DrawerStack() {
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  //For warning: Sending `onAnimatedValueUpdate` with no listeners registered.
  const av = new Animated.Value(0);
  av.addListener(() => {return});
  
  return (
    <DrawerNav.Navigator
      initialRouteName="ValuesStack"
      drawerContent={(props) => <MenuLeft {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.backgroundPrmColor,
        },
      }}
    >
      <DrawerNav.Screen name="CPRStack" component={CPRStack} />
      <DrawerNav.Screen name="ValuesStack" component={ValuesStack} />
      <DrawerNav.Screen name="SolutionsStack" component={SolutionsStack} />
      <DrawerNav.Screen name="SettingsStack" component={SettingsStack} />
    </DrawerNav.Navigator>
  );
}

export function headerOptions(props: any){

  const {
    navigation,
    route,
    theme,
    canGoBack,
  } = props;

  return({
    headerShown: true,
    headerStyle: {
      backgroundColor: theme.headerBgColor,
    },
    headerTitleStyle: {
      color: theme.headerTextColor,
    },
    headerLeft: () => canGoBack ? <BackButton navigation={navigation}/> : <DrawerButton navigation={navigation} />,
    headerRight: () => <HeaderRight route={route} />,
  })

}
