import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/** @Components */
import DrawerButton from './Components/DrawerButton';
import FormulasStack from './BottomTab/FormulasStack';
import MenuBottom from './Components/MenuBottom';
import UrgenciesStack from './BottomTab/UrgenciesStack';
/** */

/** @Hooks */
import { useAppSelector } from '../../app/hooks';
/** */

export type RootStackParams = {
  UrgenciesStack: undefined;
  FormulasStack: undefined;
};

const BottomTabNav = createBottomTabNavigator<RootStackParams>();

export default function BottomTabStack() {
  const theme = useAppSelector(({ theme }) => theme.value);
  const language = useAppSelector(({ language }) => language.value);

  return (
    <BottomTabNav.Navigator
      initialRouteName="UrgenciesStack"
      tabBar={(props) => <MenuBottom {...props} />}
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: theme.backgroundPrmColor,
        },
        headerTitleStyle: {
          color: theme.textPrmColor,
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        headerLeft: () => <DrawerButton navigation={navigation} />,
      })}
    >
      <BottomTabNav.Screen
        name="UrgenciesStack"
        component={UrgenciesStack}
        options={{ title: language.home.screenTitle }}
      />
      <BottomTabNav.Screen
        name="FormulasStack"
        component={FormulasStack}
        options={{ title: language.home.screenTitle }}
      />
    </BottomTabNav.Navigator>
  );
}
