import React, { useEffect, useState } from 'react';
import { FlatList, NativeModules, Text, View } from 'react-native';

/** @Assets */
import { values } from 'data';
import { valuesType } from 'types';
/** */

/** @Components */
import { BaseButton, BaseScreen } from 'components';
import ValueComp from '../Components/ValueComp';
/** */

import { useAppSelector, getLangState } from '../../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { CPRView, StopWatch } from '../../../NativeModules';
import { CPRViewManager } from '../../../NativeModules/CPR/CPRViewManager';
import Timer from '../../CPR/Components/Timer';


function Values() {
  
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const data = values(language.name);
  const [elapsed, setElapsed] = useState(0);
  const [state, setState] = useState('stopped');
  
  async function callModule(){
    console.log('esto se llama??')
    let som = await StopWatch.testModule();
    StopWatch.testModule().then((response) => console.log(response))
    console.log('esto se llama??', som);
  }

  function startWatch(){
    console.log('watch start')
    StopWatch.startStopWatch();
    StopWatch.getElapsedTime().then(response => setElapsed(Math.floor(response/1000)));
    setState('started');
  }

  function stopWatch(){
    console.log('watch stop')
    StopWatch.stopStopWatch();
    setState('stopped');
  }

  async function getTime(){
    console.log('we are getting the time');
    const s =  await StopWatch.getElapsedTime();
  }



  return (
    <BaseScreen isScrollable={false}>
      <Timer/>
      <CPRView/>
      <FlatList<valuesType>
        data={data}
        renderItem={({item}) => <ValueComp item={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </BaseScreen>
  );
}

export default Values;
