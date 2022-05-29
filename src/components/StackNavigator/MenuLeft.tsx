import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../app/hooks';
import LanguageSelection from '../Common/LanguageSelection';

import ThemeSelection from '../Common/ThemeSelection';

export default function MenuLeft() {
  const theme = useAppSelector(({ theme }) => theme.value);
  const language = useAppSelector(({ language }) => language.value);

  return (
    <SafeAreaView>
      <View style={styles.mainCont}>
        <View style={styles.bottomCont}>
          <ThemeSelection />
          <LanguageSelection />
          <Text style={[styles.copyright, { color: theme.inactive }]}>
            genesisbell.com | {language.copyright.version}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomCont: {
    bottom: 0,
  },
  copyright: {
    alignSelf: 'center',
  },
});
