import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../../app/hooks';
import MedLangSelection from '../../Common/MedLangSelection';

import MedThemeSelection from '../../Common/MedThemeSelection';

export default function MenuLeft() {
  const theme = useAppSelector(({ theme }) => theme.value);
  const language = useAppSelector(({ language }) => language.value);

  return (
    <SafeAreaView>
      <View style={styles.mainCont}>
        <View style={styles.bottomCont}>
          <MedThemeSelection />
          <MedLangSelection />
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
