import React, { useState } from 'react';
import { View, Text } from 'react-native';

/** @Assets */
import { OptionType } from 'types';
import { getMonths, getYears } from 'configurations';
import { CommonStyles } from 'styles';
/** */

/** @Components */
import { BaseActionSheet, BaseSpace, BaseTextInput } from 'components';
/** */

import { useAppSelector } from '../../../app/hooks';

function PatientData() {
  /** @Variables */
  const [patientForm, setPatientForm] = useState({
    weight: '',
    age: '',
  });
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const language = useAppSelector(({ language }) => language.value);
  const theme = useAppSelector(({ theme }) => theme.value);
  const yearsOptions = getYears();
  const monthsOptions = getMonths();
  /** */

  /** @Handlers */
  function handlePatienForm(value: string, name?: string) {
    if (name) {
      setPatientForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function handleYearInfo(option: OptionType) {
    setYear(option.info.key);
  }

  function handleMonthInfo(option: OptionType) {
    setMonth(option.info.key);
  }
  /** */

  return (
    <View>
      <View style={CommonStyles.flexDirectionRowSpaceBetween}>
        <View style={CommonStyles.flexThird}>
          <BaseTextInput
            value={patientForm.weight}
            placeholder={language.general.weight}
            name={'weight'}
            onChangeText={handlePatienForm}
            keyboardType="numeric"
            auxButtons={[
              {
                icon: (
                  <View>
                    <Text style={theme.subText}>KG</Text>
                  </View>
                ),
              },
            ]}
          />
        </View>
        <BaseSpace horizontal md />
        <View style={CommonStyles.flexThird}>
          <BaseActionSheet
            customButton={
              <View style={theme.FavoritesStyles.ageButton}>
                <View style={theme.FavoritesStyles.selectedAgeCont}>
                  <Text style={theme.prmTxt}>{year}</Text>
                </View>
                <View style={theme.FavoritesStyles.ageMsg}>
                  <Text style={theme.subText}>{language.general.years.toLocaleUpperCase()}</Text>
                </View>
              </View>
            }
            options={yearsOptions}
            getOptionInfo={handleYearInfo}
          />
        </View>
        <BaseSpace horizontal md />
        <View style={CommonStyles.flexThird}>
          <BaseActionSheet
            customButton={
              <View style={theme.FavoritesStyles.ageButton}>
                <View style={theme.FavoritesStyles.selectedAgeCont}>
                  <Text style={theme.prmTxt}>{month}</Text>
                </View>
                <View style={theme.FavoritesStyles.ageMsg}>
                  <Text style={theme.subText}>{language.general.months.toLocaleUpperCase()}</Text>
                </View>
              </View>
            }
            options={monthsOptions}
            getOptionInfo={handleMonthInfo}
          />
        </View>
      </View>
    </View>
  );
}

export default PatientData;
