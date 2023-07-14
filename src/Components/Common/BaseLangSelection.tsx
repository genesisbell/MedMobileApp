import React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** @Components */
import BaseSpace from './BaseSpace';
/** */

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { dispatchSelectedLanguage } from '../../app/slices/languageSlice';

export default function BaseLangSelection() {
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
      <Text style={[theme.bigText, theme.centerText, { color: theme.text }]}>
        {language.language.selectLanguage}
      </Text>
      <Picker
        selectedValue={language.name}
        onValueChange={(itemValue) => saveLanguageSelection(itemValue)}
      >
        <Picker.Item label="English" value="en" color={theme.text} />
        <Picker.Item label="Español" value="es" color={theme.text} />
      </Picker>
    </View>
  );
}
