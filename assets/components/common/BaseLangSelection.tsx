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

import { useAppSelector, useAppDispatch, getLangState, getThemeState } from '../../../src/app/hooks';
import { dispatchSelectedLanguage } from '../../../src/app/slices/languageSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store';

export function BaseLangSelection() {
  const dispatch = useAppDispatch();
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
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
