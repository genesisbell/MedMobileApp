import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

/** @Assets */
import { bpmKey, langKey, themeKey } from 'app-constants';
/** */

/** @Components */
import AppRouter from './AppRouter';
/** */

/** @Hooks */
import { useAppDispatch } from './app/hooks';
import { dispatchThemeSelection } from './app/slices/themeSlice';
import { dispatchSelectedLanguage } from './app/slices/languageSlice';
import { dispatchBPM } from './app/slices/settingsSlice';
/** */

export default function AppFirsLoad() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    void (async function () {
  
      const [theme, language, bpm] = await AsyncStorage.multiGet([
        themeKey,
        langKey,
        bpmKey,
      ]);
  
      //Set First Load Theme
      dispatchThemeSelection(theme[1] ? theme[1] : 'lightTheme', dispatch);
  
      //Set First Load Language
      dispatchSelectedLanguage(language[1] ? language[1] : 'en', dispatch);
      
      //Set First Load BPM for CPR
      dispatchBPM(bpm[1] ? parseInt(bpm[1]) : 80, dispatch);
    })();

    SplashScreen.hide();

  }, []);

  return <AppRouter />;
}
