import React, { useEffect, useRef, useState } from 'react';
import { PixelRatio, StyleSheet, Text, View } from 'react-native';
import Sound from 'react-native-sound';

/** Components */
import { BaseButton, BaseHorizontalLine, BaseScreen, BaseTimer, CircularProgress } from 'components';
import { CommonStyles } from 'styles';
/**/
const STROKE_WIDTH = 30;
const radius = PixelRatio.roundToNearestPixel(100);
const CYCLE = 120;

function CPR() {
  /** @Variables */
  Sound.setCategory('Playback');
  const [timer, setTimer] = useState(-1);
  const soundRef = useRef(0);
  const clocktime = useRef(0);
  const longding = useRef(new Sound('longnotif.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  }));

  const cref = useRef<any>();
  const timerref = useRef<any>();
  const [key, setKey] = useState(0);

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
      
      if(timerref.current.timer >= CYCLE && timerref.current.timer % CYCLE === 0){
        longding.current.play();
      }

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
    const bpm = 80; //80 - 120
    const interval = (60 / bpm) * 1000;
    soundRef.current = setInterval(() => {
      ding.play();
    }, interval);
    cref.current?.start();
    timerref.current.start();
    return;
  }
  /**/

  return (
    <BaseScreen>
      <BaseButton
        text={timer < 0 ? 'Start' : 'Stop'}
        onPress={handleTimer}
        buttonColor={timer < 0 ? 'green' : 'red'}
      />
      <View style={CommonStyles.absoluteCenter}>
        <CircularProgress
          key={key}
          ref={cref}
          strokeWidth={STROKE_WIDTH}
          radius={radius}
          backgroundColor="#f93986"
          percentageComplete={100}
          duration={CYCLE * 1000}
        >
          <BaseTimer ref={timerref}/>
        </CircularProgress>
      </View>
      <BaseButton text={'Descarga'}/>
      <BaseButton text={'Adrenalina'}/>
      <BaseButton text={'Agregar Evento'}/>
      <BaseButton text={'Bitacora'}/>
      <BaseHorizontalLine/>
      <Text>Ultimos Eventos</Text>
    </BaseScreen>
  );
}

export default CPR;

