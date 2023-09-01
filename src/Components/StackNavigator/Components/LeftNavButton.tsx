import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

/** @Components */
import { BaseSpace } from 'components';
/** */

import { useAppSelector, getThemeState } from '../../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

interface LeftNavButtonProps {
  icon: (color?: string) => string;
  text: string;
  onPress: () => void;
}

function LeftNavButton(props: LeftNavButtonProps) {
  /** @Variables */
  const { icon, text, onPress } = props;
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  /** */

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={theme.NavigationStyles.leftNavBtn}>
        <SvgXml xml={icon(theme.textPrmColor)} width={40} height={40} />
        <BaseSpace horizontal />
        <Text style={theme.NavigationStyles.leftNavTxt}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(LeftNavButton);
