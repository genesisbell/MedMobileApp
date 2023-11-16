import React, { useEffect, useRef, useState } from 'react';
import { PixelRatio, View } from 'react-native';
import { useSelector } from 'react-redux';
import Sound from 'react-native-sound';
import RNFS from 'react-native-fs';

/** @Assets */
import { CommonStyles } from 'styles';
/** */

/** @Components */
import { BaseButton, BaseSpace, BaseTimer, CircularProgress } from 'components';
/** */

import { getLangState, getThemeState } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import Events from './Events';
import Logs from './Logs';

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
  let events = useRef<Array<[string, Date]>>([]);

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
      createFile();
      clearInterval(soundRef.current);
      setKey(Math.random());
      timerref.current.stop();
      readeFile()
      return;
    }
    
    events.current = [];
    events.current.push(['start', new Date()])
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
  
  function createFile(){
    var path = RNFS.DocumentDirectoryPath + '/test.csv';
    // const values = [
      //   ['build', '2017-11-05T05:40:35.515Z'],
      //   ['deploy', '2017-11-05T05:42:04.810Z'],
      //   ['start', new Date],
      
      // ];
      // const values = [
        //   ['start', new Date],
        //   ...events.current,
        // ]
    events.current.push(['stop', new Date()])
    const values = events.current
    // construct csvString
    const headerString = 'event,timestamp\n';
    const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('');
    const csvString = `${headerString}${rowString}`;

    // write the file
    RNFS.writeFile(path, csvString, 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!', path, success);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function readeFile(){
    RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
      // console.log('GOT RESULT', result);

      // stat the first file
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then((statResult) => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], 'utf8');
      }

      return 'no file';
    })
    .then((contents) => {
      // log the file contents
      console.log(contents);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
  }
  
  return(
    <View>
      <BaseButton
        text={timer < 0 ? lang.general.start : lang.general.stop  }
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

      <Events events={events.current} disabled={timer < 0}/>      

      <Logs logs={events.current}/>

    </View>
  )
}

export default Timer;