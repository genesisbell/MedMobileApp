import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import Sound from 'react-native-sound';
import MetronomeModule from "react-native-metronome-module";

/** @Assets */
import { CommonStyles } from 'styles';
/** */

/** @Components */
import { BaseText } from './BaseText';
/** */

import { getClock } from '../../../src/utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store';
import { getSettingsState } from '../../../src/app/slices/settingsSlice';

const CYCLE = 25;
const LAST_SECONDS = 10;

interface BaseTimerProps{
}

Sound.setCategory('Playback');

function BaseTimer(props: BaseTimerProps, ref: any){

  const settings = useSelector((rootState: RootState) => getSettingsState(rootState));
  const [basis, setBasis] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerDisp, setTimerDisp] = useState('00:00');
  const intervalId = useRef(0);

  const longding = useRef(new Sound('longnotif.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  }));

  useEffect(() => {
    if (basis)
      intervalId.current = setInterval(() => {
        setTimer(new Date().valueOf());
      }, 100)
    return () => {
      clearInterval(intervalId.current)
    }
  }, [basis]);


  useEffect(() => {
    if (basis && timer) {
      const toDisp = Math.floor((timer - basis) / 1000)
      setTimerDisp(getClock(toDisp));

      if(toDisp >= CYCLE && toDisp % CYCLE === 0){        
        longding.current.play();
      }
    }
  }, [timer]);

  function handleStart(){
    const t = new Date();
    setBasis(t.valueOf());
    MetronomeModule.setBPM(settings.bpm);
    MetronomeModule.start();
  }

  function handleStop(){
    setTimerDisp('00:00');
    clearInterval(intervalId.current);
    MetronomeModule.stop();
  }

  useImperativeHandle(ref, () => ({
    start: handleStart,
    stop: handleStop,
    timer: Math.floor((timer - basis) / 1000),
  }));

  return <BaseText style={CommonStyles.h6}>{timerDisp}</BaseText>;
}

export default forwardRef(BaseTimer);