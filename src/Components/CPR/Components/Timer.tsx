import React, { useRef, useState } from 'react';
import { PixelRatio, View } from 'react-native';
import { useSelector } from 'react-redux';
import Sound from 'react-native-sound';
import RNFS from 'react-native-fs';
import Toast from 'react-native-root-toast';

/** @Assets */
import { CommonStyles } from 'styles';
import { errorToast, successToast } from 'configurations';
/** */

/** @Components */
import { BaseButton, BaseSpace, BaseTimer, CircularProgress } from 'components';
import Events from './Events';
import Logs from './Logs';
/** */

import { getLangState, getThemeState } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { FormatDate } from '../../../utils';
import { CPRView } from '../../../NativeModules';

const STROKE_WIDTH = 30;
const radius = PixelRatio.roundToNearestPixel(100);
const CYCLE = 25;
const LAST_SECONDS = 10;
// const BPM = 120; //80 - 120

Sound.setCategory('Playback');

function Timer(){
  
  /** @Variables */
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);
  const [started, setStarted] = useState(false);
  const [key, setKey] = useState(0);
  const soundRef = useRef(0);
  const cref = useRef<any>();
  const timerref = useRef<any>();
  let events = useRef<Array<[Date, string]>>([]);
  const cprref = useRef<any>();
  /**/

  /** @Handlers */
  async function handleTimer() {
    if (started) {
      setStarted(false);
      // createFile();
      // clearInterval(soundRef.current);
      setKey(Math.random());
      // timerref.current.stop();
      cprref.current.stop();
      return;
    }
    
    events.current = [];
    events.current.push([new Date(), lang.general.start]);
    setStarted(true);
    cref.current?.start();
    cprref.current.start();
    // timerref.current.start();
    return;
  }
  
  function createFile(){
    const date = new FormatDate(new Date()).format('dd-MM-yy HH.mm.ss');
    const folderPath = `${RNFS.DocumentDirectoryPath}/blueberry_logs`;
    const filePath = `${folderPath}/log${date}.csv`;
    events.current.push([new Date(), lang.general.stop])
    const values = events.current
    // construct csvString
    // const headerString = 'Event,Timestamp\n';
    const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('');
    // const csvString = `${headerString}${rowString}`;
    const csvString = `${rowString}`;


    RNFS.mkdir(folderPath)
    .then((success) => {
      RNFS.writeFile(filePath, csvString, 'utf8')
      .then((success) => {
        Toast.show(lang.cpr.fileCreated, successToast(theme));
      })
      .catch((err) => {
        Toast.show(lang.general.defaultError, errorToast(theme));
      });
    })
    .catch((err) => {
      Toast.show(lang.general.defaultError, errorToast(theme));
    });
  }
  
  return(
    <View>
      <BaseButton
        text={started ? lang.general.stop : lang.general.start }
        onPress={handleTimer}
        buttonColor={started ? 'red' : 'green'}
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
          {/* <BaseTimer ref={timerref}/> */}
          <CPRView ref={cprref}/>
        </CircularProgress>
        <BaseSpace xbg/>
      </View>

      <Events events={events.current} disabled={!started}/>      

      <Logs logs={events.current}/>

    </View>
  )
}

export default Timer;