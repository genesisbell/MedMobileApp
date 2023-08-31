import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

/** @Assets */
import { CommonStyles } from 'styles';
import { getSolutionsByOptions, getSalineTypeOptions } from 'configurations';
import { getBodySurface, getHollidayVolume } from 'data';
import { OptionType } from 'types';
/** */

/** @Components */
import { 
  BaseActionSheet,
  BaseButton,
  BaseScreen,
  BaseSpace,
  BaseText,
  BaseTextInput,
} from 'components';
/** */

import { useAppSelector } from '../../../app/hooks';

function Solutions(){

  /** @Variables */
  const {language, patient} = useAppSelector((data) => ({
    language: data.language.value,
    patient: data.patient,
  }));
  const solutionsByOptions = getSolutionsByOptions(language);
  const salineTypeOptions = getSalineTypeOptions(language);
  const [solutionBy, setSolutionBy] = useState({
    hollidaySegar: false,
    bodySurface: false,
  })
  const [form, setForm] = useState({
    hollidayPer: '',
    bodySurface: '',
    na: '',
    k: '',
    ca: '',
    mg: '',
    glucose: '',
  });
  const [hasSodium, setHasSodium] = useState(false);
  const bodySurface = getBodySurface(patient.weight);
  const hollidayVolumne = getHollidayVolume(patient.weight, parseInt(form.hollidayPer))
  /** */

  /** @useEffect */
  useEffect(() => {
    if(form.na !== '' && parseInt(form.na) > 0){
      setHasSodium(true);
    }else{
      setHasSodium(false);
    }
  }, [form.na]);
  /** */

  /** @Handlers */
  function handleInputChange(value: string, name?: string){
    if(name){
      setForm(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function handleSolutionOption(option: OptionType){
    if(option.info.key === 'holliday_segar'){
      setSolutionBy({        
        hollidaySegar: true,
        bodySurface: false,
      });
    }

    if(option.info.key === 'body_surface'){
      setSolutionBy({        
        hollidaySegar: false,
        bodySurface: true,
      });
    }
  }
  /** */

  return (
    <BaseScreen>

      <View style={CommonStyles.flexDirectionRowSpaceBetween}>
        <View style={CommonStyles.flexHalf}>
          <BaseActionSheet
            options={solutionsByOptions}
            initialOptionIndex={-1}
            message={`${language.solutions.solutions} ${language.general.by}:`}
            getOptionInfo={handleSolutionOption}
          />
        </View>

        <BaseSpace horizontal xbg/>

        {
          solutionBy.hollidaySegar && (
            <View style={CommonStyles.flexHalf}>
              <BaseTextInput
                value={form.hollidayPer}
                name={'hollidayPer'}
                placeholder='Porcentaje'
                onChangeText={handleInputChange}
                keyboardType='numeric'
                auxButtons={[
                  {
                    icon: <BaseText>%</BaseText>
                  }
                ]}
              />
            </View>
          )
        }

        {
          solutionBy.bodySurface && (
            <View style={CommonStyles.flexHalf}>
              <BaseTextInput
                value={form.bodySurface}
                name={'bodySurface'}
                placeholder='ml/m2/día'
                onChangeText={handleInputChange}
                keyboardType='numeric'
                auxButtons={[
                  {
                    icon: <BaseText>ml/m2/día</BaseText>
                  }
                ]}
              />
            </View>
          )
        }

      </View>

      <BaseSpace xbg/>

      <BaseText>{hollidayVolumne}</BaseText>

      <BaseText style={[CommonStyles.h6, CommonStyles.centerText]}>Requerimientos deseados</BaseText>
      <View style={CommonStyles.flexDirectionRowSpaceBetween}>

        <View style={hasSodium ? CommonStyles.flexHalf : CommonStyles.flexOne}>
          <BaseTextInput
            value={form.na}
            name={'na'}
            placeholder='Sodio (na)'
            onChangeText={handleInputChange}
            keyboardType='numeric'
            auxButtons={[
              {
                icon: <BaseText>mEq/kg/día</BaseText>
              }
            ]}
          />
        </View>

        {hasSodium && <BaseSpace xbg horizontal/>}

        {
          hasSodium && (
            <View style={CommonStyles.flexHalf}>
              <BaseActionSheet
                options={salineTypeOptions}
                initialOptionIndex={-1}
                message={`${language.solutions.solutions} ${language.general.by}:`}
                getOptionInfo={handleSolutionOption}
              />
            </View>
          )
        }


      </View>

      <BaseTextInput
        value={form.k}
        name={'k'}
        placeholder='Potasio (k)'
        onChangeText={handleInputChange}
        keyboardType='numeric'
        auxButtons={[
          {
            icon: <BaseText>mEq/kg/día</BaseText>
          }
        ]}
      />
      <BaseTextInput
        value={form.ca}
        name={'ca'}
        placeholder='Calcio (ca)'
        onChangeText={handleInputChange}
        keyboardType='numeric'
        auxButtons={[
          {
            icon: <BaseText>mg/kg/día</BaseText>
          }
        ]}
      />
      <BaseTextInput
        value={form.mg}
        name={'mg'}
        placeholder='Magnesio (mg)'
        onChangeText={handleInputChange}
        keyboardType='numeric'
        auxButtons={[
          {
            icon: <BaseText>mg/kg/día</BaseText>
          }
        ]}
      />
      <BaseTextInput
        value={form.glucose}
        name={'glucose'}
        placeholder='Glucosa'
        onChangeText={handleInputChange}
        keyboardType='numeric'
        auxButtons={[
          {
            icon: <BaseText>GKM</BaseText>
          }
        ]}
      />

      <BaseButton
        text='Calcular'
      />

    </BaseScreen>
  )
}

export default Solutions;