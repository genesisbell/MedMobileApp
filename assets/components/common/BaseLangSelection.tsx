import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** @Assets */
import { langOptions } from 'configurations';
import { OptionType } from 'types';
/** */

/** @Components */
import { BaseActionSheet } from './BaseActionSheet';
import { BaseSpace } from './BaseSpace';
import { BaseText } from './BaseText';
/** */

import { useAppSelector, useAppDispatch } from '../../../src/app/hooks';
import { dispatchSelectedLanguage } from '../../../src/app/slices/languageSlice';

export function BaseLangSelection() {
  const dispatch = useAppDispatch();
  const language = useAppSelector(({ language }) => language.value);
  const theme = useAppSelector(({ theme }) => theme.value);
  const langIndex = langOptions.findIndex(lang => lang.info.key === language.name);

  function saveLanguageSelection(option: OptionType) {
    dispatchSelectedLanguage(option.info.key.toString(), dispatch);
    void (async function () {
      await AsyncStorage.setItem('language', option.info.key.toString());
    })();
  }

  return (
    <View>
      <BaseSpace xbg />
      <BaseText style={[theme.bigText, theme.centerText]}>
        {language.language.selectLanguage}
      </BaseText>
      <BaseSpace />
      <BaseActionSheet
        options={langOptions}
        initialOptionIndex={langIndex}
        getOptionInfo={saveLanguageSelection}
      />
    </View>
  );
}
