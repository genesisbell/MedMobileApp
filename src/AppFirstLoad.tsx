import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from './app/hooks';
import { dispatchThemeSelection } from './app/slices/themeSlice';
import { dispatchSelectedLanguage } from './app/slices/languageSlice';
import AppRouter from './AppRouter';

export default function AppFirsLoad() {
  const dispatch = useAppDispatch();

  void (async function () {
    //Set First Load Theme
    const theme = await AsyncStorage.getItem('theme');
    dispatchThemeSelection(theme ? theme : 'lightTheme', dispatch);

    //Set First Load Language
    const language = await AsyncStorage.getItem('language');
    dispatchSelectedLanguage(language ? language : 'en', dispatch);
  })();

  return <AppRouter />;
}
