import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** @Assets */
import { lightTheme, darkTheme, solarTheme } from 'styles';
import { phoneIcon } from 'icons';
/** */

/** @Components */
import { BaseSpace } from './BaseSpace';
/** */

/** @Hooks */
import { useAppDispatch, useAppSelector, getLangState, getThemeState } from '../../../src/app/hooks';
import { setDarkTheme, setLightTheme, setSolarTheme } from '../../../src/app/slices/themeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store';
import { themeKey } from 'app-constants';
/** */

export function BaseThemeSelection() {
  const dispatch = useAppDispatch();
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  function saveThemeSelection(themeName: string) {
    try {
      switch (themeName) {
        case 'lightTheme':
          dispatch(setLightTheme());
          break;

        case 'darkTheme':
          dispatch(setDarkTheme());
          break;

        case 'solarTheme':
          dispatch(setSolarTheme());
          break;

        default:
          break;
      }
      void (async function () {
        await AsyncStorage.setItem(themeKey, themeName);
      })();
    } catch (e) {
      console.error('Error saving theme selection', e);
    }
  }

  return (
    <View>
      <Text style={[theme.bigText, theme.centerText, { color: theme.textPrmColor }]}>
        {language.theme.selecTheme}
      </Text>
      <BaseSpace md />
      <View style={theme.flexDirectionRowSpaceAround}>
        <TouchableOpacity onPress={() => saveThemeSelection('lightTheme')}>
          <SvgXml xml={phoneIcon(lightTheme.backgroundPrmColor, lightTheme.textPrmColor)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveThemeSelection('darkTheme')}>
          <SvgXml xml={phoneIcon(darkTheme.backgroundPrmColor, darkTheme.textPrmColor)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveThemeSelection('solarTheme')}>
          <SvgXml xml={phoneIcon(solarTheme.backgroundPrmColor, solarTheme.textPrmColor)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
