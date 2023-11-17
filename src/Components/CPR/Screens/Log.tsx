import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import RNFS from 'react-native-fs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

/** @Assets */
import { CommonStyles } from 'styles';
/** */

/** @Componets */
import { BaseHorizontalLine, BaseScreen, BaseSpace, BaseText } from 'components';
/** */

import { CPRStackParams } from '../../StackNavigator/CPRStack';
import { FormatDate } from '../../../utils';
import { RootState } from '../../../app/store';
import { getLangState } from '../../../app/hooks';


type LogProps = NativeStackScreenProps<CPRStackParams, 'Log'> & {};

function Log(props: LogProps){

  const {
    navigation,
    route,
  } = props;
  const {filePath, fileName} = route.params;
  const [data, setData] = useState<string[]>();
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);

  useEffect(() => {

    navigation.setOptions({title: fileName})

    RNFS.readFile(filePath)
    .then(contents => {
      setData(contents.split('\n').slice(0, -1));
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
  }, []);

  function formatDate(date: Date | string){
    return new FormatDate(date, lang.name).format('MMM, dd HH:mm:ss')
  }

  return(
    <BaseScreen isScrollable={false}>
      <View style={CommonStyles.flexDirectionRow}>
        <BaseText style={[CommonStyles.h5, CommonStyles.flexOne]}>{lang.general.timestamp}</BaseText>
        <BaseSpace horizontal md/>
        <BaseText style={[CommonStyles.h5, CommonStyles.flexOne]}>{lang.cpr.event}</BaseText>
      </View>
      <BaseHorizontalLine/>
      <BaseSpace md/>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          data?.map((d, key) => {
            const s = d.split(',');
            return (
              <View key={key}>
                <View style={CommonStyles.flexDirectionRow}>
                  <BaseText style={CommonStyles.flexOne}>{formatDate(s[0])}</BaseText>
                  <BaseSpace horizontal md/>
                  <BaseText style={CommonStyles.flexOne}>{s[1]}</BaseText>
                </View>
                <BaseHorizontalLine margin={10}/>
              </View>
          )})
        }
      </ScrollView>
    </BaseScreen>
  )

}

export default Log;