import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SvgXml } from 'react-native-svg';

/** @Assets */
import { chevronArrow } from 'icons';
import { CommonStyles } from 'styles';
/** */

import { RootState } from '../../../app/store';
import { getThemeState } from '../../../app/hooks';

interface BackButtonProps{
  navigation: any;
}

function BackButton(props: BackButtonProps){

  const { navigation } = props;
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <TouchableWithoutFeedback onPress={handleGoBack}>
      <View style={CommonStyles.rotate270deg}>
        <SvgXml xml={chevronArrow(theme.headerTextColor)} width={30} height={30}/>
      </View>
    </TouchableWithoutFeedback>
  )

}

export default BackButton;