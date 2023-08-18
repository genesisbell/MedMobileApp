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
    primaryColor,
    thickBorder,
    mdSpace,
} from 'styles';
import { FontWeightType } from 'types';
import { BaseText } from './BaseText';
import { useAppSelector } from '../../../src/app/hooks';
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
    } = props;

  const theme = useAppSelector(({ theme }) => theme.value); 

    const bcolor = buttonColor || primaryColor;
    const hasShadow = shadow === undefined ? true : shadow;
    const shadowObject = hasShadow ? theme.shadow : {};
    // let disabled = true;

    let finalHeight = height || 40;
    if(sm){
        finalHeight = 30;
    }else if(md){
        finalHeight = 35;
    }

    const colorButton = buttonColor || primaryColor;
    const colorBorder = borderColor || bcolor;
    const colorText = textColor || theme.textSryColor;

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
    });

    return(
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled || loading}>
            <View style={[theme.BaseButtonStyles.button, conditionalStyle.button]}>
                {
                    icon ? (
                        icon
                    ): (
                        <BaseText style={[theme.BaseButtonStyles.text, conditionalStyle.text]} numberOfLines={1}>{text}</BaseText>
                    )
                }
            </View>
        </TouchableWithoutFeedback>
    );

}