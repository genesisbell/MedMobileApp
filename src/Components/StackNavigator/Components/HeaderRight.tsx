import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { RouteProp } from '@react-navigation/native';

/** @Assets */
import { CommonStyles } from 'styles';
import { userIcon } from 'icons';
import { OptionType } from 'types';
import { getMonths, getYears } from 'configurations';
/** */

/** @Components */
import { 
  BaseActionSheet,
  BaseButton,
  BaseSpace,
  BaseTextInput,
  BaseModal,
  BaseText,
} from 'components';
/** */

/** @Hooks */
import { useAppDispatch, useAppSelector, getLangState, getPatientState, getThemeState } from '../../../app/hooks';
import { dispatchAge, dispatchWeight } from '../../../app/slices/patientSlice';
/** */

import { RootStackParams } from '../DrawerStack';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const vw = Dimensions.get('window').width;

interface HeaderRightProps{
  route: RouteProp<RootStackParams, keyof RootStackParams>,
}

function HeaderRight(props: HeaderRightProps){

  /** @Variables */
  const { route } = props;
  const dispatch = useAppDispatch();
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const patient = useSelector((rootState: RootState) => getPatientState(rootState));
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  const yearsOptions = getYears();
  const monthsOptions = getMonths();
  const [weight, setWeight] = useState(patient.weight ? patient.weight.toString() : '');
  const [year, setYear] = useState(patient.years);
  const [month, setMonth] = useState(patient.months);
  const [showModal, setShowModal] = useState({
    key: 1,
    show: false,
  });
  const isWeightDependant = route.name === 'Values';
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
    const auxWeight = weight === '' ? 0 : parseInt(weight);
    dispatchAge({years: year, months: month}, dispatch);
    dispatchWeight(auxWeight, dispatch);
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
          <View style={CommonStyles.flexDirectionRow}>
            <BaseText style={[CommonStyles.smallText, {color: theme.headerTextColor}]}>
              {patient.weight} kg | 
            </BaseText>
            <BaseText style={[CommonStyles.smallText, {color: isWeightDependant ? theme.secondaryColor : theme.headerTextColor, fontWeight: isWeightDependant ? 'bold' : 'normal'}]}>
              {' '}{patient.years}a {patient.months}m
            </BaseText>
          </View>
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