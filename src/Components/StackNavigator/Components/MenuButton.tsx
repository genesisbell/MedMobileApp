import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import {
  NavigationHelpers,
  ParamListBase,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';

/** @Assets */
import { MenuBottomIcons } from 'configurations';
/** */

import { useAppSelector } from '../../../app/hooks';

type MenuButtonProps = {
  state: TabNavigationState<ParamListBase>;
  index: number;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  route: RouteProp<ParamListBase>;
  buttonWidth: string;
};

function MenuButton(props: MenuButtonProps) {
  /** @Variables */
  const { state, index, navigation, route, buttonWidth } = props;

  const theme = useAppSelector(({ theme }) => theme.value);
  const isFocused = state.index === index;
  const color = isFocused ? theme.menuIconActiveColor : theme.menuIconInactiveColor;
  const icon = MenuBottomIcons[index](color);

  const onPress = () => {
    navigation.navigate({ name: route.name, merge: false, params: {} });
  };

  const conditionalStyle = StyleSheet.create({
    button: {
      borderTopColor: isFocused ? theme.primaryColor : theme.backgroundSryColor,
      width: buttonWidth,
    },
  });

  /** */

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[theme.NavigationStyles.button, conditionalStyle.button]}>
        <SvgXml xml={icon} width={25} height={25} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MenuButton;
