import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

/** @Assets */
import { settingsIcon, solutionsIcon, valuesIcon } from 'icons';
import { logo } from 'images';
import { CommonStyles } from 'styles';
/** */

/** @Components */
import LeftNavButton from './LeftNavButton';
import { BaseHorizontalLine, BaseText } from 'components';
/** */

/** @Hooks */
import { useAppSelector, getLangState, getThemeState } from '../../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
/** */

export default function MenuLeft(props: DrawerContentComponentProps) {
  /** @Variables */
  const { navigation } = props;
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  let id = 0;
  const screens = [
    // {
    //   id: id++,
    //   icon: homeIcon,
    //   text: 'Favoritos',
    //   onPress: () => navigation.navigate('Favorites'),
    // },
    {
      id: id++,
      icon: valuesIcon,
      text: language.values.values,
      onPress: () => navigation.navigate('ValuesStack'),
    },
    {
      id: id++,
      icon: valuesIcon,
      text: language.cpr.cpr,
      onPress: () => navigation.navigate('CPRStack'),
    },
    {
      id: id++,
      icon: solutionsIcon,
      text: language.solutions.solutions,
      onPress: () => navigation.navigate('SolutionsStack'),
    },
    {
      id: id++,
      icon: settingsIcon,
      text: language.settings.settings,
      onPress: () => navigation.navigate('SettingsStack'),
    },
    // {
    //   id: id++,
    //   icon: homeIcon,
    //   text: 'Urgencies',
    //   onPress: () => navigation.navigate('Urgencies'),
    // },
    // {
    //   id: id++,
    //   icon: homeIcon,
    //   text: 'Drugs',
    //   onPress: () => navigation.navigate('Drugs'),
    // },
  ];
  /** */
  return (
    <SafeAreaView>
      <View style={theme.NavigationStyles.drawerMainCont}>
        <View style={CommonStyles.flexDirectionRow}>
          <Image
            source={logo}
            style={{
              height: 120,
              width: 120,
            }}
          />
          <BaseText style={[
            CommonStyles.flexOne,
            CommonStyles.h1,
            CommonStyles.letterSpacingOne,
          ]}>{language.appName}</BaseText>
        </View>
        <BaseHorizontalLine/>
        {screens.map((screen) => (
          <LeftNavButton
            key={screen.id}
            icon={screen.icon}
            text={screen.text}
            onPress={screen.onPress}
          />
        ))}
        <View style={theme.NavigationStyles.drawerBottomCont}>
          <Text style={theme.subText}>
            genesisbell.com | {language.copyright.version}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
