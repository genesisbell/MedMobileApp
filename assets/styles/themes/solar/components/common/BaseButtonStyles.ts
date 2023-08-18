import { StyleSheet } from "react-native";
import { smSpace, smBrRadius, h6Size } from "../../../../CommonStyles";

export const BaseButtonStyles = StyleSheet.create({
    button:{
        borderRadius: smBrRadius,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: smSpace,
    },
    text:{
        fontSize: h6Size,
    }
})