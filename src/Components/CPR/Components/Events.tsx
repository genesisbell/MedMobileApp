import React from 'react';
import { View } from 'react-native';

/** @Components */
import { BaseButton } from 'components';
/** */

function Events(){

  return(
    <View>
      <BaseButton text={'Descarga'}/>
      <BaseButton text={'Adrenalina'}/>
      <BaseButton text={'Agregar Evento'}/>
      <BaseButton text={'Bitacora'}/>
    </View>

  )

}

export default Events;