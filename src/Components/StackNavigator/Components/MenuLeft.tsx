import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

/** @Assets */
import { homeIcon } from 'icons';
/** */

/** @Components */
import LeftNavButton from './LeftNavButton';
/** */

/** @Hooks */
import { useAppSelector } from '../../../app/hooks';
/** */

export default function MenuLeft(props: DrawerContentComponentProps) {
  /** @Variables */
  const { navigation } = props;
  const theme = useAppSelector(({ theme }) => theme.value);
  const language = useAppSelector(({ language }) => language.value);
  let id = 0;
  const screens = [
    {
      id: id++,
      icon: homeIcon,
      text: 'Favoritos',
      onPress: () => navigation.navigate('Favorites'),
    },
    {
      id: id++,
      icon: homeIcon,
      text: 'Values',
      onPress: () => navigation.navigate('Values'),
    },
    {
      id: id++,
      icon: homeIcon,
      text: 'Settings',
      onPress: () => navigation.navigate('Settings'),
    },
    {
      id: id++,
      icon: homeIcon,
      text: 'Urgencies',
      onPress: () => navigation.navigate('Urgencies'),
    },
    {
      id: id++,
      icon: homeIcon,
      text: 'Drugs',
      onPress: () => navigation.navigate('Drugs'),
    },
  ];
  /** */
  return (
    <SafeAreaView>
      <View style={theme.NavigationStyles.drawerMainCont}>
        {screens.map((screen) => (
          <LeftNavButton
            key={screen.id}
            icon={screen.icon}
            text={screen.text}
            onPress={screen.onPress}
          />
        ))}
        <View style={theme.NavigationStyles.drawerBottomCont}>
          <Text style={{ color: theme.textSryColor }}>
            genesisbell.com | {language.copyright.version}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
