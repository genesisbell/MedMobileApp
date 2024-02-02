import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import RNFS, { ReadDirItem } from 'react-native-fs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BaseScreen, BaseText } from 'components';
import { CPRStackParams } from '../../StackNavigator/CPRStack';
import LogFileComponent from '../Components/LogFileComponent';


type LogsProps = NativeStackScreenProps<CPRStackParams, 'Logs'> & {};

function Logs(props: LogsProps){

  /** @Variables */
  const [files, setFiles] = useState<ReadDirItem[]>([]);
  const { navigation } = props;
  /** */

  /** @useEffect */
  useEffect(() => {

    readDirectory();

  }, []);
  /** */

  /** @Handlers */
  function readDirectory(){
    RNFS.readDir(`${RNFS.DocumentDirectoryPath}/blueberry_logs`) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
      
      const paths:Array<string> = [];
      result.map(re => {
        paths.push(re.name);
        
      });
      setFiles(result);
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
  }
  /** */

  return (
    <BaseScreen>
      {
        files.map(file => (
          <LogFileComponent
            key={file.name}
            file={file}
            navigation={navigation}
            reloadDirectory={readDirectory}
          />
        ))
      }
    </BaseScreen>
  )
}

export default Logs;