import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useSelector } from 'react-redux';
import RNFS, { ReadDirItem } from 'react-native-fs';
import { SvgXml } from 'react-native-svg';

/** @Assets */
import { CommonStyles, mdSpace, smBrRadius } from 'styles';
import { options } from 'icons';
import { OptionsType } from 'types';
/** */

/** @Components */
import { BaseActionSheet, BaseButton, BaseSpace, BaseText, BaseTextInput } from 'components';
/** */

import { RootState } from '../../../app/store';
import { getLangState, getThemeState } from '../../../app/hooks';
import Toast from 'react-native-root-toast';
import { errorToast, successToast } from 'configurations';

interface LogFileComponentProps{
  file: ReadDirItem,
  navigation: any,
  reloadDirectory: () => void,
}


function LogFileComponent(props: LogFileComponentProps){

  /** @Variables */
  const { file, navigation, reloadDirectory } = props;
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  const lang = useSelector((rootState: RootState) => getLangState(rootState).value);
  const [fileName, setFileName] = useState('');
  const [errorName, setErrorName] = useState({errors: [lang.cpr.nameError], visible: false})
  const [showCustomContent, setShowCustomContent] = useState({
    show: false,
    rename: false,
    delete: false,
  })

  const fileOptions:OptionsType = [
    {
      text: lang.cpr.rename,
      info: {
        key: 'rename',
      },
      onPress: () => {
        setShowCustomContent({
          show: true,
          rename: true,
          delete: false,
        })
      },

    },
    {
      text: lang.general.delete,
      info: {
        key: 'delete',
      },
      onPress: () => {
        setShowCustomContent({
          show: true,
          rename: false,
          delete: true,
        })
      },
      component: <BaseText style={[CommonStyles.h4, theme.errText]}>{lang.general.delete}</BaseText>
    },
  ]
  /** */

  /** @Handlers */
  function goToFile(){
    navigation.navigate('Log', {filePath: file.path, fileName: file.name});
  }

  function handleDeleteFile(){
    
    RNFS.unlink(file.path)
    .then(() => {
        reloadDirectory();
        Toast.show(lang.cpr.fileDeleted, successToast(theme));
      })
      .catch((err) => {
        console.log(err.message);
        Toast.show(lang.general.defaultError, errorToast(theme));
      });
  }

  function handleRenameFile(){
    const newPath = `${RNFS.DocumentDirectoryPath}/${fileName}.csv`

    RNFS.exists(newPath).then((exist) => {
      if(exist) {
        setErrorName(prevState => ({
          errors: prevState.errors,
          visible: true,
        }));
        return;
      };

      RNFS.moveFile(file.path, newPath)
      .then(() => {
        reloadDirectory();
        Toast.show(lang.cpr.fileRenamed, successToast(theme));
      })
      .catch((err) => {
        console.log(err.message);
        Toast.show(lang.general.defaultError, errorToast(theme));
      });
    });

  }

  function handleCloseActionSheet(){
    setShowCustomContent({
      show: false,
      rename: false,
      delete: false,
    });
  }

  function handleNameChange(value: string){
    setFileName(value);
    setErrorName(prevState => ({
      errors: prevState.errors,
      visible: false,
    }));
  }
  /** */

  return(
    <View>
      <View style={theme.CPRStyles.fileRow}>
        <TouchableWithoutFeedback onPress={goToFile}>
          <View style={theme.CPRStyles.fileGoToFileBtn}>
            <BaseText style={CommonStyles.bigText}>{file.name}</BaseText>
          </View>
        </TouchableWithoutFeedback>
        <BaseActionSheet
          options={fileOptions}
          customButton={(
          <View style={theme.CPRStyles.fileOptBtn}>
            <SvgXml xml={options(theme.textPrmColor)} width={20} height={20}/>
          </View>
          )}
          wontHideActionSheet
          onClose={handleCloseActionSheet}
          customContent={
            showCustomContent.show ? (
              <View style={theme.CPRStyles.confirmSheet}>
                {
                  showCustomContent.delete && (
                    <BaseText style={[CommonStyles.h4, CommonStyles.centerText]}>{lang.cpr.sureDelete} {file.name}?</BaseText>
                  )
                }
                {
                  showCustomContent.rename && (
                    <View>
                      <BaseText style={[CommonStyles.h4, CommonStyles.centerText]}>{lang.cpr.rename} {lang.cpr.file} {file.name}</BaseText>
                      <BaseTextInput value={fileName} placeholder={lang.cpr.newFileName} onChangeText={handleNameChange} error={errorName}/>
                    </View>
                  )
                }
                <BaseSpace xbg/>
                <View style={CommonStyles.flexDirectionRowSpaceBetween}>
                  <View style={CommonStyles.flexOne}>
                    <BaseButton text={lang.general.cancel} buttonColor={theme.textSryColor} onPress={handleCloseActionSheet}/>
                  </View>
                  <BaseSpace horizontal md/>
                  <View style={CommonStyles.flexOne}>
                    {
                      showCustomContent.rename && (
                        <BaseButton text={lang.cpr.rename} onPress={handleRenameFile} disabled={fileName.length === 0}/>
                      )
                    }
                    {
                      showCustomContent.delete && (
                        <BaseButton buttonColor={theme.errColor} text={lang.general.delete} onPress={handleDeleteFile}/>
                      )
                    }
                  </View>
        
                </View>

              </View>
            ): null
          }
        />
      </View>
    </View>
  )
}

export default LogFileComponent;