import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

/** @Assets */
import { CommonStyles } from 'styles';
/** */

/** @Components */
import { BaseButton, BaseScreen, BaseSpace } from 'components';
import Events from '../Components/Events';
import Logs from '../Components/Logs';
import Timer from '../Components/Timer';
/**/

import { CPRStackParams } from '../../StackNavigator/CPRStack';
import { RootState } from '../../../app/store';
import { getLangState } from '../../../app/hooks';

type CPRProps = NativeStackScreenProps<CPRStackParams, 'CPR'> & {};

function CPR(props: CPRProps) {
  /** @Variables */
  const { navigation } = props;
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);
  /**/

  /** @useEffect */
  /**/

  /** @Handlers */
  /**/

  return (
    <BaseScreen isKeyboardAvoidingViewNative>

      <View style={CommonStyles.flexDirectionRowSpaceBetween}>
        <View style={CommonStyles.flexOne}>
          <BaseButton text={lang.cpr.logs} sm outlined onPress={() => navigation.navigate('Logs')}/>
        </View>
        <BaseSpace horizontal md/>
        <View style={CommonStyles.flexOne}>
          <BaseButton text={lang.settings.settings} sm outlined/>
        </View>
      </View>
      <BaseSpace md/>
      <Timer/>
      {/* <Events/> */}
      {/* <Logs/> */}
    </BaseScreen>
  );
}

export default CPR;

