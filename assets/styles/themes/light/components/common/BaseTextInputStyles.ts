import { StyleSheet } from "react-native";
import {
    h6Size,
    inputHelperButtonWidth,
    mdSpace,
    normalBorder,
    primaryColor,
    smSpace,
    thinBorder,
} from "../../../../CommonStyles";
import { 
    backgroundPrmColor,
    backgroundSryColor,
    borderSryColor,
    shadow,
    textPrmColor,
} from "../../constants";

const multilineHeight = 100;

export const BaseTextInputStyles = StyleSheet.create({
    inputContainer: {
        borderRadius: smSpace,
        backgroundColor: backgroundSryColor,
        marginVertical: smSpace,
        ...shadow,
    },
    inputContainerDisabled: {
        borderRadius: smSpace,
        backgroundColor: backgroundSryColor,
        marginVertical: smSpace,
        ...shadow,
    },
    inputContainerFlat:{
        borderRadius: smSpace,
        marginVertical: smSpace,
        borderBottomWidth: thinBorder,
        borderColor: borderSryColor,
        backgroundColor: backgroundPrmColor,
    },
    buttonFlat:{
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: inputHelperButtonWidth,
        padding: smSpace,
        backgroundColor: backgroundPrmColor,
        borderBottomWidth: thinBorder,
        borderColor: borderSryColor,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundSryColor,
        minWidth: inputHelperButtonWidth,
        padding: smSpace,
    },
    buttonsContainer:{
        flexDirection: 'row',        
        position: 'absolute',
        right: 0,
        bottom:-1,
        top: 0,
    },
    input: {
        padding: mdSpace,
        fontSize: h6Size,
        color: textPrmColor,
    },
    placeholderContainer: {
        position: 'absolute',
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    placeholder: {
        fontSize: h6Size,
        position: 'absolute',
        marginHorizontal: smSpace,
        paddingHorizontal: smSpace,
    },
    border: {
        borderBottomWidth: normalBorder,
        borderColor: primaryColor
    },
    multiline:{
        height: multilineHeight,
        textAlignVertical: 'top',
    }
});