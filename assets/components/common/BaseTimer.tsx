import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';

/** @Components */
import { BaseButton } from './BaseButton';
/** */

import { getClock } from '../../../src/utils';

interface BaseTimerProps{
}

function BaseTimer(props: BaseTimerProps, ref: any){

  const [basis, setBasis] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerDisp, setTimerDisp] = useState('00:00');
  const intervalId = useRef(0);

  useEffect(() => {
    if (basis)
      intervalId.current = setInterval(() => {
        setTimer(new Date().valueOf());
      }, 100)
    return () => {
      clearInterval(intervalId.current)
    }
  }, [basis])


  useEffect(() => {
    if (basis && timer) {
      const toDisp = Math.floor((timer - basis) / 1000)
      setTimerDisp(getClock(toDisp));
    }
  }, [timer]);


  // useEffect(() => {
  //   if (timerDisp <= 0) {
  //     clearInterval(intervalId.current);
  //   }
  // }, [timerDisp])

  function handleStart(){
    var t = new Date();
    setBasis(t.valueOf());
  }

  function handleStop(){
    setTimerDisp('00:00');
    clearInterval(intervalId.current);
  }

  useImperativeHandle(ref, () => ({
    start: handleStart,
    stop: handleStop,
    timer: Math.floor((timer - basis) / 1000),
  }));

  return (
    <View>
      <Text>{timerDisp}</Text>
    </View>
  )
}

export default forwardRef(BaseTimer);