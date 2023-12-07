import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';

/** @Assets */
import { CommonStyles } from 'styles';
import { bpmKey } from 'app-constants';
import { errorToast, successToast } from 'configurations';
/** */

/** @Components */
import { BaseButton, BaseScreen, BaseSpace, BaseText, BaseTextInput } from 'components';
/** */

import { getLangState, getThemeState, useAppDispatch } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { dispatchBPM, getSettingsState } from '../../../app/slices/settingsSlice';

function Settings(){

  const dispatch = useAppDispatch();
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  const settings = useSelector((rootState: RootState) => getSettingsState(rootState));
  const [bpm, setBpm] = useState('');
  const [error, setError] = useState({
    errors: [lang.cpr.bpmError],
    visible: false,
  });

  /** @Handlers */
  function handleChangeBpm(value: string){
    setBpm(value);
  }

  function handleSetBpm(){
    const _bpm = parseInt(bpm);
    if(_bpm >= 80 && _bpm <= 120){
      dispatchBPM(_bpm, dispatch);
      AsyncStorage.setItem(bpmKey, bpm).then(() => {
        Toast.show(lang.cpr.bpmSuccess, successToast(theme));
      }).catch(() => {
        Toast.show(lang.general.defaultError, errorToast(theme));
      });
      setBpm('');
      return;
    }
    
    setError(prevState => ({
      errors: prevState.errors,
      visible: true,
    }));

  }
  /** */

  return(
    <BaseScreen>

      <BaseSpace xbg/>

      <View style={CommonStyles.flexDirectionRowSpaceBetween}>
        <BaseText style={CommonStyles.bigText}>{lang.settings.bpmCurrent}:
          <BaseText style={CommonStyles.h6}> {settings.bpm}</BaseText>
        </BaseText>
      </View>

      <BaseSpace/>

      <BaseTextInput
        value={bpm}
        placeholder={lang.settings.bpmInst}
        onChangeText={handleChangeBpm}
        keyboardType='numeric'
        auxButtons={[{
          icon: <BaseText>BPM</BaseText>
        }]}
        error={error}
      />

      <BaseSpace xbg/>

      <BaseButton text={lang.general.accept} onPress={handleSetBpm}/>

    </BaseScreen>
  )
}

export default Settings;