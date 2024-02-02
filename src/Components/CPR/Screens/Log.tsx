import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import RNFS from 'react-native-fs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Share from 'react-native-share';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

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
  const viewShotRef = useRef<any>();

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

  function handleShare(){


    //TODO: Impletement pdf share 
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
    };

    RNHTMLtoPDF.convert(options).then(file => {
      console.log(file)
      Share.open({
        url: `file://${file.path}`,
      }).then(res => console.log(' si se pudo'))
    }).catch(e => console.log(e))
    

    // viewShotRef.current.capture().then(uri => {
    //   console.log("do something with ", uri);
    // })
  }

  return(
    <BaseScreen isScrollable={false}>
      {/* <BaseButton onPress={handleShare}/> */}
      <View style={CommonStyles.flexDirectionRow}>
        <BaseText style={[CommonStyles.h5, CommonStyles.flexOne]}>{lang.general.timestamp}</BaseText>
        <BaseSpace horizontal md/>
        <BaseText style={[CommonStyles.h5, CommonStyles.flexOne]}>{lang.cpr.event}</BaseText>
      </View>
      <BaseHorizontalLine/>
      <BaseSpace md/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}}>
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