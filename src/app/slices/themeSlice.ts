import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {darkTheme, lightTheme, mcDonaldsTheme} from 'themes';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: lightTheme,
    },
    reducers: {
        setLightTheme: state => {
            state.value = lightTheme;
        },
        setDarkTheme: state => {
            state.value = darkTheme;
        },
        setMCTheme: state => {
            state.value = mcDonaldsTheme;
        },
    },
});

export const {setLightTheme, setDarkTheme, setMCTheme} = themeSlice.actions;

export default themeSlice.reducer;

export function dispatchThemeSelection(
    value: string,
    dispatch: (arg0: PayloadAction) => void,
) {
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
        case 'mcDonaldsTheme':
            dispatch(setMCTheme());
            break;
        default:
            break;
    }
}
