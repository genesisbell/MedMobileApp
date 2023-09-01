import React from 'react';
import { Text, TextProps } from 'react-native';  
import { useAppSelector, getThemeState } from '../../../src/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store';


export function BaseText(props: TextProps){

  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  return(
    <Text {...props} style={[theme.BaseTextStyles.text, props.style]} >
      {props.children}
    </Text>
  )
}