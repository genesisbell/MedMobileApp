import React from 'react';
import { StyleSheet, View } from 'react-native';
import { xsmSpace } from 'styles';
import { useAppSelector, getThemeState } from '../../../src/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store';

interface BaseHorizontalLineProps{
    height?: string | number,
    width?: string | number,
    color?: string,
    margin?: number,
}


export function BaseHorizontalLine(props: BaseHorizontalLineProps){

    const { height, width, color, margin } = props;
    const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

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