import { Dimensions, StyleSheet } from "react-native";
const vw = Dimensions.get('window').width;
export const toastWidth = vw * .85;

export const successToast = (theme:any) => ({
    position: 40, //TOP
    opacity: 1,
    textColor: theme.textPrmColor,
    containerStyle: {
        backgroundColor: theme.backgroundPrmColor,
        borderLeftWidth: 4,
        borderColor: theme.successColor,
    },
})

export const errorToast = (theme:any) => ({
    position: 40, //TOP
    opacity: 1,
    textColor: theme.textPrmColor,
    containerStyle: {
        backgroundColor: theme.backgroundPrmColor,
        borderLeftWidth: 4,
        borderColor: theme.errColor,
    },
})

export const ToastStyle = StyleSheet.create({
    innerToastCont:{
        width: toastWidth * .95
    }
});