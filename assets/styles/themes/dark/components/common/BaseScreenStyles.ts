import { StyleSheet } from "react-native";
import { bgSpace } from "../../../../CommonStyles";

export const paddingHorizontalScreen = bgSpace * 2;

export const BaseScreenStyles = StyleSheet.create({
    screen:{
        flexGrow: 1,
        paddingHorizontal: bgSpace,
    },
    screenWOPadding:{
        flexGrow: 1,
    },
});