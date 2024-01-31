import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {
  PixelRatio,
  UIManager,
  View,
  findNodeHandle,
} from 'react-native';

import {CPRViewManager} from './CPRViewManager';

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
}

const size = 200;

function _CPRView(props: CPRViewProps, cprref:any){

  /** @Variables */
  const {
    bpm,
    cycle,
  } = props;
  const ref = useRef(null);
  const _bpm = bpm ? bpm : 100;
  const _cycle = cycle ? cycle : 25;
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
      />
    </View>
  )
}

export const CPRView = forwardRef(_CPRView);