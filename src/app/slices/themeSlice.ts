import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { darkTheme, lightTheme, solarTheme } from 'styles';
import { RootState } from '../store';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: lightTheme,
  },
  reducers: {
    setLightTheme: (state) => {
      state.value = lightTheme;
    },
    setDarkTheme: (state) => {
      state.value = darkTheme;
    },
    setSolarTheme: (state) => {
      state.value = solarTheme;
    },
  },
});

export const { setLightTheme, setDarkTheme, setSolarTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const getThemeState = (state: RootState) => state.theme;


export function dispatchThemeSelection(value: string, dispatch: (arg0: PayloadAction) => void) {
  switch (value) {
    case undefined:
      dispatch(setDarkTheme());
      break;
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
}
