import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

/** @Assets */
import { CommonStyles } from 'styles';
/** */

/** @Componentes */
import { BaseHorizontalLine, BaseText } from 'components';
/** */

import { RootState } from '../../../app/store';
import { getLangState } from '../../../app/hooks';

interface LogsProps {
  logs: Array<[string, Date]>,
}

function Logs(props: LogsProps){

  const { logs } = props;
  const _logs = logs.slice(-3);
  _logs.reverse();

  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);
  // const _logs = logs;

  function formatDate(date: Date){
    let hours = twoDigit(date.getHours());
    let minutes = twoDigit(date.getMinutes());
    let seconds = twoDigit(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  function twoDigit(value: number){
    return value < 10 ? '0' + value : value;
  }

  return(
    <View>
      <BaseHorizontalLine/>
      <BaseText style={CommonStyles.h6}>{lang.cpr.lastEvents}</BaseText>
      {
        _logs?.map((log, index) => (
          <Text key={index}>
            <Text>{formatDate(log[1])}</Text>
            <Text> - </Text>
            <Text style={CommonStyles.boldText}>{log[0]}</Text>
          </Text>
        ))
      }
    </View>
  )

}

export default Logs;