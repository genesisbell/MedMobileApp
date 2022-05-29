import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { dispatchSelectedLanguage } from '../../app/slices/languageSlice';

export default function LanguageSelection() {
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
    <View style={styles.mainCont}>
      <Text style={[styles.titleText, { color: theme.text }]}>
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

const styles = StyleSheet.create({
  mainCont: {
    marginVertical: 20,
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  screenCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
