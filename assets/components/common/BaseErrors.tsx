import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../../../src/app/store';
import { getThemeState } from '../../../src/app/hooks';

interface ErrorsProps {
  errors: any,
  visible: boolean,
}

export default function BaseErrors({errors, visible}: ErrorsProps){
  if(!Array.isArray(errors)) return null;
  if(errors.length === 0) return null;
  if(visible === false) return null;


  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  return (
    <View>
      {
        [...new Set(errors)].map((er, index) =>
        (
          <Text
            key={index}
            style={theme.BaseErrorsStyles.error}
          >
            {er}
          </Text>
        )
      )}
    </View> 
  );
}