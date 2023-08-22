import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

/** @Components */
import AppRouter from './AppRouter';
/** */

/** @Hooks */
import { useAppDispatch } from './app/hooks';
import { dispatchThemeSelection } from './app/slices/themeSlice';
import { dispatchSelectedLanguage } from './app/slices/languageSlice';
/** */

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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppRouter />;
}
