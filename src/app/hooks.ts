import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
export { getLangState } from './slices/languageSlice';
export { getThemeState } from './slices/themeSlice';
export { getPatientState } from './slices/patientSlice';
export { getSettingsState } from './slices/settingsSlice';
import { getLangState } from './slices/languageSlice';
import { getThemeState } from './slices/themeSlice';
import { getPatientState } from './slices/patientSlice';
import { getSettingsState } from './slices/settingsSlice';


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getState = {
  getLangState: getLangState,
  getThemeState: getThemeState,
  getPatientState: getPatientState,
  getSettingsState: getSettingsState,
}
