import React, { useEffect, useRef, useState } from 'react';
import { PixelRatio, View } from 'react-native';
import { useSelector } from 'react-redux';
import Sound from 'react-native-sound';

/** @Assets */
import { CommonStyles } from 'styles';
/** */

/** @Components */
import { BaseButton, BaseSpace, BaseTimer, CircularProgress } from 'components';
/** */

import { getLangState, getThemeState } from '../../../app/hooks';
import { RootState } from '../../../app/store';

const STROKE_WIDTH = 30;
const radius = PixelRatio.roundToNearestPixel(100);
const CYCLE = 25;
const LAST_SECONDS = 10;
const BPM = 80; //80 - 120

Sound.setCategory('Playback');

function Timer(){
  
  /** @Variables */
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);
  const [timer, setTimer] = useState(-1);
  const [key, setKey] = useState(0);
  const soundRef = useRef(0);
  const clocktime = useRef(0);
  const cref = useRef<any>();
  const timerref = useRef<any>();

  const longding = useRef(new Sound('longnotif.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  }));

  const lastDing = useRef(new Sound('bip2.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  }));

  //Change this audio
  const ding = new Sound('bip1.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });
  /**/

  /** @useEffect */
  useEffect(() => {
    if (timer >= 0) {
      
      clocktime.current = setInterval(() => {
        setTimer((prevState) => prevState + 1);
      }, 1000);

    }
    return () => {        
      clearInterval(clocktime.current);
      // clearInterval(soundRef.current);
    };
  }, [timer]);
  /**/

  /** @Handlers */
  function handleTimer() {
    if (timer >= 0) {
      setTimer(-1);
      clearInterval(soundRef.current);
      setKey(Math.random());
      timerref.current.stop();
      return;
    }
    
    setTimer(1);
    const interval = (60 / BPM) * 1000;
    soundRef.current = setInterval(() => {
      
      if(timerref.current?.timer % CYCLE >= CYCLE - LAST_SECONDS){
        lastDing.current.play();
        return;
      }

      if(timerref.current.timer >= CYCLE && timerref.current.timer % CYCLE === 0){        
        longding.current.play();
        return;
      }

      ding.play();

    }, interval);
    cref.current?.start();
    timerref.current.start();
    return;
  }

  return(
    <View>
      <BaseButton
        text={timer < 0 ? lang.general.start : lang.general.stop}
        onPress={handleTimer}
        buttonColor={timer < 0 ? 'green' : 'red'}
      />
      <View style={CommonStyles.absoluteCenter}>
        <BaseSpace xbg/>
        <CircularProgress
          key={key}
          ref={cref}
          strokeWidth={STROKE_WIDTH}
          radius={radius}
          backgroundColor={theme.textSryColor}
          color="#f93986"
          percentageComplete={100}
          duration={CYCLE * 1000}
        >
          <BaseTimer ref={timerref}/>
        </CircularProgress>
        <BaseSpace xbg/>
      </View>
    </View>
  )
}

export default Timer;