import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setDarkTheme, setLightTheme, setMCTheme } from '../../app/slices/themeSlice';

//Assets
import { lightTheme, darkTheme, mcDonaldsTheme } from 'themes';
import { OtherIcons } from 'icons';

export default function ThemeSelection() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(({ theme }) => theme.value);
  const language = useAppSelector(({ language }) => language.value);

  function saveThemeSelection(themeName: string) {
    try {
      switch (themeName) {
        case 'lightTheme':
          dispatch(saveThemeSelection(setLightTheme));
          break;

        case 'darkTheme':
          dispatch(saveThemeSelection(setDarkTheme));
          break;

        case 'mcDonaldsTheme':
          dispatch(saveThemeSelection(setMCTheme));
          break;

        default:
          break;
      }
      void (async function () {
        await AsyncStorage.setItem('theme', themeName);
      })();
    } catch (e) {
      console.error('Error saving theme selection', e);
    }
  }

  return (
    <View style={styles.mainCont}>
      <Text style={[styles.titleText, { color: theme.text }]}>{language.theme.selecTheme}</Text>
      <View style={styles.screenCont}>
        <TouchableOpacity onPress={() => saveThemeSelection('lightTheme')}>
          <SvgXml xml={OtherIcons.phone(120, lightTheme.mainBackgroundColor, lightTheme.text)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveThemeSelection('darkTheme')}>
          <SvgXml xml={OtherIcons.phone(120, darkTheme.mainBackgroundColor, darkTheme.text)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveThemeSelection('mcDonaldsTheme')}>
          <SvgXml
            xml={OtherIcons.phone(120, mcDonaldsTheme.mainBackgroundColor, mcDonaldsTheme.text)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainCont: {
    marginVertical: 20,
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 30,
  },
  screenCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
