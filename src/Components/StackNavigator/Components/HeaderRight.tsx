import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import BaseActionSheet from '../../Common/BaseActionSheet';

/** @Assets */
import { CommonStyles } from 'styles';
import { userIcon } from 'icons';
import { OptionType } from 'types';
import { getMonths, getYears } from 'configurations';
/** */

/** @Components */
import { BaseButton, BaseModal, BaseText } from 'components';
import BaseSpace from '../../Common/BaseSpace';
import BaseTextInput from '../../Common/BaseTextInput';
/** */

/** @Hooks */
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { dispatchAge, dispatchWeight } from '../../../app/slices/patientSlice';
/** */

const vw = Dimensions.get('window').width;

function HeaderRight(){

  /** @Variables */
  const dispatch = useAppDispatch();
  const {patient, theme, language} = useAppSelector(({ patient, theme, language }) => (
    {
      patient,
      theme: theme.value,
      language: language.value
    }
  ));
  const yearsOptions = getYears();
  const monthsOptions = getMonths();
  const [weight, setWeight] = useState(patient.weight ? patient.weight.toString() : '');
  const [year, setYear] = useState(patient.years);
  const [month, setMonth] = useState(patient.months);
  const [showModal, setShowModal] = useState({
    key: 1,
    show: false,
  });
  /** */

  /** @Handlers */
  function handleWeight(value: string) {
    setWeight(value);
  }

  function handleYearInfo(option: OptionType) {
    setYear(option.info.key);
  }

  function handleMonthInfo(option: OptionType) {
    setMonth(option.info.key);
  }

  function handlePatientData(){
    dispatchAge({years: year, months: month}, dispatch);
    dispatchWeight(parseInt(weight), dispatch);
    setShowModal({
      key: Math.random(),
      show: false,
    })
  }
  /** */

  return(
    <BaseModal
    showModal={showModal}
      icon={(
        <View style={[CommonStyles.alignCenter, {paddingRight: 10}]}>
          <SvgXml xml={userIcon(theme.headerTextColor)} width={25} height={25} />
          <BaseText style={[CommonStyles.smallText, {color: theme.headerTextColor}]}>
            {patient.weight} kg | {patient.years}a {patient.months}m
          </BaseText>
        </View>
      )}
    >
      <View style={{width: vw * .60}}>
        <BaseTextInput
          value={weight}
          placeholder={language.general.weight}
          onChangeText={handleWeight}
          keyboardType="numeric"
          auxButtons={[
            {
              icon: (
                <View>
                  <BaseText style={theme.subText}>KG</BaseText>
                </View>
              ),
            },
          ]}
        />

        <View style={CommonStyles.flexDirectionRow}>

          <View style={CommonStyles.flexOne}>
            <BaseActionSheet
              customButton={
                <View style={theme.FavoritesStyles.ageButton}>
                  <View style={theme.FavoritesStyles.selectedAgeCont}>
                    <BaseText style={theme.prmTxt}>{year}</BaseText>
                  </View>
                  <View style={theme.FavoritesStyles.ageMsg}>
                    <BaseText style={theme.subText}>{language.general.years.toLocaleUpperCase()}</BaseText>
                  </View>
                </View>
              }
              options={yearsOptions}
              getOptionInfo={handleYearInfo}
            />
          </View>

          <BaseSpace md horizontal/>

          <View style={CommonStyles.flexOne}>
            <BaseActionSheet
              customButton={
                <View style={theme.FavoritesStyles.ageButton}>
                  <View style={theme.FavoritesStyles.selectedAgeCont}>
                    <BaseText style={theme.prmTxt}>{month}</BaseText>
                  </View>
                  <View style={theme.FavoritesStyles.ageMsg}>
                    <BaseText style={theme.subText}>{language.general.months.toLocaleUpperCase()}</BaseText>
                  </View>
                </View>
              }
              options={monthsOptions}
              getOptionInfo={handleMonthInfo}
            />
          </View>
        </View>

        <BaseSpace bg/>
        <BaseButton text='Done' onPress={handlePatientData}/>
      </View>
    </BaseModal>
  )
}

export default HeaderRight;