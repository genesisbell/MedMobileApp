import React, { useEffect, useRef, useState } from 'react';
import { PixelRatio, StyleSheet, Text, View, useAnimatedValue } from 'react-native';
import Sound from 'react-native-sound';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

/** Components */
import { BaseButton, BaseHorizontalLine, BaseScreen, BaseTimer, CircularProgress } from 'components';
import { getClock } from '../../../utils';
/**/
const STROKE_WIDTH = 30;
const radius = PixelRatio.roundToNearestPixel(130);
const CYCLE = 10;

function CPR() {
  /** @Variables */
  Sound.setCategory('Playback');
  const [timer, setTimer] = useState(-1);
  const [clock, setClock] = useState('00:00');
  const [circularKey, setCircularKey] = useState(1);
  const [prefill, setPrefill] = useState(100);
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
        setClock(getClock(timer));
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
      setClock('00:00');
      clearInterval(soundRef.current);
      setPrefill(100);
      setCircularKey(1);
      setKey(Math.random());
      timerref.current.stop();
      return;
    }
    
    setTimer(1);
    setPrefill(0);
    setCircularKey(Math.random());
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
      <BaseTimer ref={timerref}/>
      <View style={styles.container}>
        <View style={styles.ringChartContainer}>
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
      </View>
      <AnimatedCircularProgress
        key={circularKey}
        size={120}
        width={15}
        fill={100}
        prefill={prefill}
        tintColor="#00e0ff"
        duration={CYCLE * 1000}
        onAnimationComplete={() => timer >= 0 && setCircularKey(Math.random())}
        backgroundColor="#3d5875"
      >
        {
          (fill) => (
            <Text>
              { clock }
            </Text>
          )
        }
      </AnimatedCircularProgress>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringChartContainer: {
    width: radius * 2,
    height: radius * 2,
  },
});
