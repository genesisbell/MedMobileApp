import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
    View,
} from 'react-native';

/** @Assets */
import {
    thickBorder,
    mdSpace,
} from 'styles';
import { FontWeightType } from 'types';
import { BaseText } from './BaseText';
import { useAppSelector, getThemeState } from '../../../src/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store';
/***/


interface BaseButtonProps extends TouchableWithoutFeedbackProps{
    text?: string,
    buttonColor?: string,
    textColor?: string,
    textWeight?: FontWeightType,
    borderColor?: string,
    width?: string | number,
    height?: string | number,
    shadow?: boolean,
    sm?: boolean,
    md?: boolean,
    loading?: boolean,
    icon?: React.ReactNode;
    paddingHorizontal?: number,
    isNotButton?: boolean,
    outlined?: boolean,
}

export function BaseButton(props: BaseButtonProps){
    const { 
        onPress,
        text,
        buttonColor,
        textColor,
        textWeight,
        borderColor,
        shadow,
        sm,
        md,
        width,
        height,
        icon,
        paddingHorizontal,
        disabled,
        loading,
        isNotButton,
        outlined,
    } = props;

    const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

    const bcolor = buttonColor || theme.primaryColor;
    const hasShadow = shadow === undefined ? true : shadow;
    const shadowObject = hasShadow ? theme.shadow : {};
    // let disabled = true;

    let finalHeight = height || 40;
    if(sm){
        finalHeight = 30;
    }else if(md){
        finalHeight = 35;
    }

    const colorButton = buttonColor || theme.primaryColor;
    const colorBorder = borderColor || bcolor;
    const colorText = textColor || theme.textTryColor;

    const conditionalStyle = StyleSheet.create({
        button:{
            borderColor: colorBorder,
            backgroundColor: colorButton,
            borderWidth: thickBorder,
            height: finalHeight,
            width,
            paddingHorizontal: paddingHorizontal !== undefined ? paddingHorizontal : mdSpace,
            ...shadowObject,
            opacity: ( disabled || loading ) ? .5 : 1,
        },
        text:{
            fontWeight: textWeight || 'bold',
            color: colorText,
        },
        textOutlined:{
            fontWeight: textWeight || 'bold',
            color: colorBorder,
        },
        buttonOutlined:{
            borderColor: colorBorder,
            borderWidth: thickBorder,
            height: finalHeight,
            width,
            paddingHorizontal: paddingHorizontal !== undefined ? paddingHorizontal : mdSpace,
            opacity: ( disabled || loading ) ? .5 : 1,
        }
    });

    if(isNotButton){
        return (
            <View style={[theme.BaseButtonStyles.button, outlined ? conditionalStyle.buttonOutlined : conditionalStyle.button]}>
                {
                    icon ? (
                        icon
                    ): (
                        <BaseText style={[theme.BaseButtonStyles.text, outlined ? conditionalStyle.textOutlined : conditionalStyle.text]} numberOfLines={1}>{text}</BaseText>
                    )
                }
            </View>
        )
    }

    return(
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled || loading}>
            <View style={[theme.BaseButtonStyles.button, outlined ? conditionalStyle.buttonOutlined : conditionalStyle.button]}>
                {
                    icon ? (
                        icon
                    ): (
                        <BaseText style={[theme.BaseButtonStyles.text, outlined ? conditionalStyle.textOutlined : conditionalStyle.text]} numberOfLines={1}>{text}</BaseText>
                    )
                }
            </View>
        </TouchableWithoutFeedback>
    );

}
