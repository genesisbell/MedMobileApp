import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    bpm: 80,
  },
  reducers: {
    setBPM: (state, action: AnyAction) => {
      state.bpm = action.bpm;
    },
  },
});

export const { setBPM } = settingsSlice.actions;

export default settingsSlice.reducer;

export const getSettingsState = (state: RootState) => state.settings;

export function dispatchBPM(
  value: number,
  dispatch: Dispatch<AnyAction>,
) {
  dispatch({
    type: setBPM,
    bpm: value
  });
}
