import React, { useState } from 'react';
import { View } from 'react-native';

/** @Components */
import { BaseButton, BaseSpace, BaseTextInput } from 'components';
import { CommonStyles } from 'styles';
/** */


interface EventsProps {
  events: Array<[string, Date]>;
  disabled: boolean;
}

function Events(props: EventsProps){

  const { events, disabled } = props;
  const [customEvent, setCustomEvent] = useState('');

  function handleAddEvent(event: string){
    events.push([event, new Date()]);
    setCustomEvent('');
  }

  function handleChangeEvent(value: string){
    setCustomEvent(value);
  }


  return(
    <View>
      <BaseButton text={'Descarga'} onPress={() => handleAddEvent('Descarga')} disabled={disabled}/>
      <BaseButton text={'Adrenalina'} onPress={() => handleAddEvent('Adrenalina')} disabled={disabled}/>
      <View style={CommonStyles.flexDirectionRowSpaceBetween}>
        <View style={CommonStyles.flexOne}>
          <BaseTextInput
            value={customEvent}
            placeholder={'Evento'}
            onChangeText={handleChangeEvent}
            disabled={disabled}
          />
        </View>
        <BaseSpace horizontal md/>
        <BaseButton text={'Agregar Event'} onPress={() => handleAddEvent(customEvent)} disabled={disabled || customEvent.length === 0}/>
      </View>
    </View>

  )

}

export default Events;