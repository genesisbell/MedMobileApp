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
import { BaseButton, BaseSpace } from 'components';
import Events from './Events';
import Logs from './Logs';
/** */

import { getLangState, getThemeState } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { FormatDate } from '../../../utils';
import { CPRView } from '../../../NativeModules';

Sound.setCategory('Playback');

function Timer(){
  
  /** @Variables */
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);
  const [started, setStarted] = useState(false);
  let events = useRef<Array<[Date, string]>>([]);
  const cprref = useRef<any>();
  /**/

  /** @Handlers */
  async function handleTimer() {
    if (started) {
      setStarted(false);
      createFile();
      cprref.current.stop();
      return;
    }
    
    events.current = [];
    events.current.push([new Date(), lang.general.start]);
    setStarted(true);
    cprref.current.start();
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
        {/* <CPRView ref={cprref}/> */}
        <BaseSpace xbg/>
      </View>

      <Events events={events.current} disabled={!started}/>      

      <Logs logs={events.current}/>

    </View>
  )
}

export default Timer;