import React, {useRef} from 'react';
import {
  UIManager,
  View,
  findNodeHandle,
} from 'react-native';

import { BaseButton } from 'components';

import {CPRViewManager} from './CPRViewManager';

export function CPRView(){

  const ref = useRef(null);
  function stop(){
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(ref.current),
      "stop",
      // [/* additional arguments */]
    );
  }
  function start(){
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(ref.current),
      "start",
      // [/* additional arguments */]
    );
  }

  return (
    <View>
      <CPRViewManager
        ref={ref}
        style={{height: 30, width:60, alignSelf:'center'}}
      />
      <BaseButton text='Start' onPress={start}/>
      <BaseButton text='Stop' onPress={stop}/>
    </View>
  )
}