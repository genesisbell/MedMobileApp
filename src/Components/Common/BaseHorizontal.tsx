import React from 'react';
import { StyleSheet, View } from 'react-native';
import { xsmSpace } from 'styles';
import { useAppSelector } from '../../app/hooks';

interface BaseHorizontalLineProps{
    height?: string | number,
    width?: string | number,
    color?: string,
    margin?: number,
}


export default function BaseHorizontalLine(props: BaseHorizontalLineProps){

    const { height, width, color, margin } = props;
    const theme = useAppSelector(({ theme }) => theme.value);

    const conditionalStyle = StyleSheet.create({
        line:{
            height: height || 1,
            width,
            backgroundColor: color || theme.borderSryColor,
            marginVertical: margin || xsmSpace,

        }
    })

    return(
        <View style={conditionalStyle.line}/>
    )
}