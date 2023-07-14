import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/** @Components */
import BaseLangSelection from '../../Common/BaseLangSelection';
import BaseThemeSelection from '../../Common/BaseThemeSelection';
/** */

/** @Hooks */
import { useAppSelector } from '../../../app/hooks';
/** */

export default function MenuLeft() {
  /** @Variables */
  const theme = useAppSelector(({ theme }) => theme.value);
  const language = useAppSelector(({ language }) => language.value);
  /** */

  return (
    <SafeAreaView>
      <View style={theme.NavigationStyles.drawerMainCont}>
        <View style={theme.NavigationStyles.drawerBottomCont}>
          <BaseThemeSelection />
          <BaseLangSelection />
          <Text style={[theme.centerText, { color: theme.textSryColor }]}>
            genesisbell.com | {language.copyright.version}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
