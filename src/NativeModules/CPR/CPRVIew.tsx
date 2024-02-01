import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {
  PixelRatio,
  UIManager,
  View,
  findNodeHandle,
} from 'react-native';

import {CPRViewManager} from './CPRViewManager';
import { BaseButton } from 'components';

function createFragment(viewId:any){
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    //@ts-ignore
    UIManager.CPRViewManager.Commands.create.toString(),
    [viewId],
  );
}

interface CPRViewProps{
  bpm?:Number;
  cycle?:Number;
  textColor?:String;
}

const size = 300;

function _CPRView(props: CPRViewProps, cprref:any){

  /** @Variables */
  const {
    bpm,
    cycle,
    textColor,
  } = props;
  const ref = useRef(null);
  const _bpm = bpm ? bpm : 100;
  const _cycle = cycle ? cycle : 25;
  const _textColor = textColor ? textColor : "#000000";
  /** */

  /** @useEffect */
  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId);
  }, []);
  /** */

  /** @Handlers */
  function handleStart(){
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(ref.current),
      "start",
      // [/* additional arguments */]
    );
  }
  function handleStop(){
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(ref.current),
      "stop",
      // [/* additional arguments */]
    );
  }
  /** */
  
  useImperativeHandle(cprref, () => ({
    start: handleStart,
    stop: handleStop,
  }));

  return (
    <View>
      <View style={{height:size, width:size, alignSelf: 'center' }}>
        <CPRViewManager
          ref={ref}
          // style={{alignSelf:'center', backgroundColor: 'red'}}
    
          style={{
            // converts dpi to px, provide desired height
            height: PixelRatio.getPixelSizeForLayoutSize(size),
            // converts dpi to px, provide desired width
            width: PixelRatio.getPixelSizeForLayoutSize(size),
          }}
          bpm={_bpm}
          cycle={_cycle}
          // textColor={_textColor}
        />
      </View>
      <BaseButton onPress={handleStart}/>
      <BaseButton onPress={handleStop}/>
    </View>
  )
}

export const CPRView = forwardRef(_CPRView);