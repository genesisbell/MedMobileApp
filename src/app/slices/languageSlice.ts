import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { en, es } from 'translations';
import { RootState } from '../store';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: en,
  },
  reducers: {
    setEnglishLanguage: (state) => {
      state.value = en;
    },
    setSpanishLanguage: (state) => {
      state.value = es;
    },
  },
});

export const { setEnglishLanguage, setSpanishLanguage } = languageSlice.actions;

export default languageSlice.reducer;

export const getLangState = (state: RootState) => state.language;

export function dispatchSelectedLanguage(value: string, dispatch: (arg0: PayloadAction) => void) {
  switch (value) {
    case undefined:
      dispatch(setEnglishLanguage());
      break;

    case 'en':
      dispatch(setEnglishLanguage());
      break;

    case 'es':
      dispatch(setSpanishLanguage());
      break;
    default:
      break;
  }
}
