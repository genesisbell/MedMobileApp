import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import themeReducer from './slices/themeSlice';
import patientSlice from './slices/patientSlice';
import settingsSlice from './slices/settingsSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    patient: patientSlice,
    settings: settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
