import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    weight: 0,
    years: 0,
    months: 0,
  },
  reducers: {
    setWeight: (state, action: AnyAction) => {
      state.weight = action.weight;
    },
    setAge: (state, action: AnyAction) => {
      state.years = action.age.years;
      state.months = action.age.months;
    },
  },
});

export const { setWeight, setAge } = patientSlice.actions;

export default patientSlice.reducer;

export const getPatientState = (state: RootState) => state.patient;

export function dispatchWeight(
  value: number,
  dispatch: Dispatch<AnyAction>,
) {
  dispatch({
    type: setWeight,
    weight: value
  });
}

export function dispatchAge(
  value: {years: number, months: number},
  dispatch: Dispatch<AnyAction>,
) {
  dispatch({
    type: setAge,
    age: value
  });
}
