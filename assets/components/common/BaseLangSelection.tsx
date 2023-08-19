import React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** @Components */
import { BaseSpace } from './BaseSpace';
/** */

import { useAppSelector, useAppDispatch } from '../../../src/app/hooks';
import { dispatchSelectedLanguage } from '../../../src/app/slices/languageSlice';

export function BaseLangSelection() {
  const dispatch = useAppDispatch();
  const language = useAppSelector(({ language }) => language.value);
  const theme = useAppSelector(({ theme }) => theme.value);

  function saveLanguageSelection(value: string) {
    dispatchSelectedLanguage(value, dispatch);
    void (async function () {
      await AsyncStorage.setItem('language', value);
    })();
  }

  return (
    <View>
      <BaseSpace xbg />
      <Text style={[theme.bigText, theme.centerText, { color: theme.textPrmColor }]}>
        {language.language.selectLanguage}
      </Text>
      <Picker
        selectedValue={language.name}
        onValueChange={(itemValue) => saveLanguageSelection(itemValue)}
      >
        <Picker.Item label="English" value="en" color={theme.textPrmColor} />
        <Picker.Item label="Español" value="es" color={theme.textPrmColor} />
      </Picker>
    </View>
  );
}
