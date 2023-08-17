import React from 'react';
import { Text, TextProps } from 'react-native';  
import { useAppSelector } from '../../../src/app/hooks';


export function BaseText(props: TextProps){

  const theme = useAppSelector(({ theme }) => theme.value);

  return(
    <Text {...props} style={[theme.prmTxt, props.style]} >
      {props.children}
    </Text>
  )
}