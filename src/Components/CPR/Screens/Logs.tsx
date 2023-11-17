import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import RNFS, { ReadDirItem } from 'react-native-fs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BaseScreen, BaseText } from 'components';
import { CPRStackParams } from '../../StackNavigator/CPRStack';


type LogsProps = NativeStackScreenProps<CPRStackParams, 'Logs'> & {};

function Logs(props: LogsProps){

  /** @Variables */
  const [files, setFiles] = useState<ReadDirItem[]>([]);
  const { navigation } = props;
  /** */

  /** @useEffect */
  useEffect(() => {

    readeFile();

  }, []);
  /** */

  /** @Handlers */
  function readeFile(){
    RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
      
      const paths:Array<string> = [];
      result.map(re => {
        
        console.log(re.path, re.mtime, re.ctime)
        paths.push(re.name);
        
      });
      setFiles(result);
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
  }
  
  function handleReadFile(file: ReadDirItem){

    navigation.navigate('Log', {file: file.path});
  }
  /** */

  return (
    <BaseScreen>
      {
        files.map(file => (
          <TouchableWithoutFeedback key={file.ctime?.toString()} onPress={() => handleReadFile(file)}>
            <View>
              <BaseText>{file.name}</BaseText>
            </View>
          </TouchableWithoutFeedback>
        ))
      }
    </BaseScreen>
  )
}

export default Logs;