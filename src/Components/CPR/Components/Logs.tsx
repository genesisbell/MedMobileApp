import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

/** @Assets */
import { CommonStyles } from 'styles';
/** */

/** @Componentes */
import { BaseHorizontalLine, BaseText } from 'components';
/** */

import { RootState } from '../../../app/store';
import { getLangState } from '../../../app/hooks';
import { FormatDate } from '../../../utils';

interface LogsProps {
  logs: Array<[Date, string]>,
}

function Logs(props: LogsProps){

  const { logs } = props;
  const _logs = logs.slice(-5).reverse();

  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);

  function formatDate(date: Date){
    return new FormatDate(date).format('HH:mm:ss')
  }

  return(
    <View>
      <BaseHorizontalLine/>
      <BaseText style={CommonStyles.h6}>{lang.cpr.lastEvents}</BaseText>
      {
        _logs?.map((log, index) => (
          <BaseText key={index}>
            <BaseText>{formatDate(log[0])}</BaseText>
            <BaseText> - </BaseText>
            <BaseText style={CommonStyles.boldText}>{log[1]}</BaseText>
          </BaseText>
        ))
      }
    </View>
  )

}

export default Logs;