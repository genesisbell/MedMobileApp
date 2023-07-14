import React from 'react';
import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

/** @Components */
import MenuButton from './MenuButton';
/** */

import { useAppSelector } from '../../../app/hooks';

export default function MenuBottom(props: BottomTabBarProps) {
  /** @Variables */
  const { state, navigation } = props;
  const buttonsCount = state.routes.length;
  const buttonWidth = `${100 / buttonsCount}%`;
  const theme = useAppSelector(({ theme }) => theme.value);
  /** */

  return (
    <View style={theme.NavigationStyles.absoluteCont}>
      <View style={theme.flexDirectionRowSpaceAround}>
        {state.routes.map((route, index) => (
          <MenuButton
            key={index}
            route={route}
            index={index}
            navigation={navigation}
            state={state}
            buttonWidth={buttonWidth}
          />
        ))}
      </View>
    </View>
  );
}
