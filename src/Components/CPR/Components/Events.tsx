import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

/** @Assets */
import { CommonStyles } from 'styles';
/** */

/** @Components */
import { BaseButton, BaseSpace, BaseTextInput } from 'components';
/** */

import { getLangState } from '../../../app/hooks';
import { RootState } from '../../../app/store';

interface EventsProps {
  events: Array<[string, Date]>;
  disabled: boolean;
}

function Events(props: EventsProps){

  const { events, disabled } = props;
  const [customEvent, setCustomEvent] = useState('');
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);

  function handleAddEvent(event: string){
    events.push([event, new Date()]);
    setCustomEvent('');
  }

  function handleChangeEvent(value: string){
    setCustomEvent(value);
  }


  return(
    <View>
      <BaseButton text={lang.cpr.charge} onPress={() => handleAddEvent(lang.cpr.charge)} disabled={disabled}/>
      <BaseButton text={lang.cpr.adrenaline} onPress={() => handleAddEvent(lang.cpr.adrenaline)} disabled={disabled}/>
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