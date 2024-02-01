import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

/** @Assets */
import { CommonStyles } from 'styles';
import { EventType } from 'types';
/** */

/** @Components */
import { BaseButton, BaseSpace, BaseTextInput } from 'components';
/** */

import { getLangState, getPatientState } from '../../../app/hooks';
import { RootState } from '../../../app/store';

interface EventsProps {
  disabled: boolean;
  handleNewEvent: (events: EventType) => void;
}

function Events(props: EventsProps){

  const { disabled, handleNewEvent } = props;
  const [customEvent, setCustomEvent] = useState('');
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);
  const patient = useSelector((rootState: RootState) => getPatientState(rootState));
  const adrenaline = patient.weight * .01;
  const charge = patient.weight * 2;

  function handleAddEvent(event: string){
    handleNewEvent([new Date(), event]);
    setCustomEvent('');
  }

  function handleChangeEvent(value: string){
    setCustomEvent(value);
  }

  return(
    <View>
      <BaseButton text={`${lang.cpr.charge} ${charge} J`} onPress={() => handleAddEvent(lang.cpr.charge)} disabled={disabled}/>
      <BaseButton text={`${lang.cpr.adrenaline} ${adrenaline} mg`} onPress={() => handleAddEvent(lang.cpr.adrenaline)} disabled={disabled}/>
      <View style={CommonStyles.flexDirectionRowSpaceBetween}>
        <View style={CommonStyles.flexOne}>
          <BaseTextInput
            value={customEvent}
            placeholder={lang.cpr.event}
            onChangeText={handleChangeEvent}
            disabled={disabled}
          />
        </View>
        <BaseSpace horizontal md/>
        <BaseButton text={lang.cpr.addEvent} onPress={() => handleAddEvent(customEvent)} disabled={disabled || customEvent.length === 0}/>
      </View>
    </View>

  )

}

export default Events;