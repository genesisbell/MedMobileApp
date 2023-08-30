import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { SvgXml } from 'react-native-svg';

/** @Assets */
import { CommonStyles } from 'styles';
import { chevronArrow, femaleIcon, maleIcon, referenceIcon } from 'icons';
import { valuesType } from 'types';
/** */

/** @Components */
import { 
  BaseHorizontalLine,
  BaseModal,
  BaseSpace,
  BaseText
} from 'components';
/** */

import { useAppSelector } from '../../../app/hooks';
import { getCurrentDataBasedOnAge } from '../../../utils';
interface ValueComp {
  item: valuesType;
}

function ValueComp({item}: ValueComp) {

  /** @Variables */
  const {patient, theme, language} = useAppSelector(({ patient, theme, language }) => (
    {
      patient,
      theme: theme.value,
      language: language.value
    }
  ));
  const [open, setOpen] = useState(false);
  const {name, data, reference} = item;
  const age = patient.years*12 + patient.months;
  const currData = getCurrentDataBasedOnAge(data, age);
  /** */

  /** @Handlers */
  function handleOpen(){
    setOpen(prevState => !prevState);
  }
  /** */

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleOpen}>
        <View style={CommonStyles.flexDirectionRow}>
          <View style={open ? CommonStyles.rotate180deg : CommonStyles.rotate90deg}>
            <SvgXml xml={chevronArrow(theme.primaryColor)} width={20} height={20}/>
          </View>
          <BaseSpace horizontal/>
          <BaseText style={[CommonStyles.h3, CommonStyles.flexOne]}>{name}</BaseText>
          <BaseModal
            icon={<SvgXml xml={referenceIcon(theme.primaryColor)} width={20} height={20}/>}
          >
            <BaseText style={CommonStyles.boldText}>{language.general.reference}</BaseText>
            <BaseText>{reference}</BaseText>
          </BaseModal>
        </View>
      </TouchableWithoutFeedback>
      {
        open && (
          <View>
            <View style={CommonStyles.flexDirectionRow}>
              <View style={CommonStyles.flexOne}/>
              {
                currData.titles.map((title, idx) => (
                  <View key={idx} style={[CommonStyles.flexHalf, CommonStyles.alignCenter]}>
                    <BaseText style={CommonStyles.boldText}>{title}</BaseText>
                  </View>
                ))
              }
            </View>
            {
              currData.values.map((value, idx) => {
                if(!value.values) return null;
                return (
                  <View key={idx}>
                    <BaseHorizontalLine height={.5}/>
                    <View style={CommonStyles.flexDirectionRow}>
                      <View style={[CommonStyles.flexOne, CommonStyles.justifyCenter]}>
                        <View style={CommonStyles.flexDirectionRow}>
                          <BaseText style={[CommonStyles.h6, theme.emphasisTryTxt]}>{value.name}</BaseText>
                          {
                            value.isGirl === true && 
                            <View style={CommonStyles.flexDirectionRow}>
                              <BaseSpace xsm horizontal/>
                              <SvgXml xml={femaleIcon('pink')} width={18} height={18}/>
                            </View>
                          }
                          {
                            value.isGirl === false &&
                            <View style={CommonStyles.flexDirectionRow}>
                              <BaseSpace xsm horizontal/>
                              <SvgXml xml={maleIcon('#A2CDF0')} width={18} height={18}/>
                            </View>
                          }
                        </View>
                        {
                          value.measure !== null && 
                          <BaseText style={[theme.emphasisSryTxt, CommonStyles.extraSamllText]}>{value.measure}</BaseText>
                        }
                      </View>
                      {
                        value.values?.map((value2, idx) => (
                          <View key={idx} style={[CommonStyles.flexHalf, CommonStyles.alignCenter]}>
                            <BaseText>{value2}</BaseText>
                          </View>
                        ))
                      }
                    </View>
                  </View>
                )
              })
            }
            <BaseSpace bg/>
            <View>
              {
                currData.extraValues?.map((extraValue, idx) => (
                  <View key={idx} style={theme.ValuesStyles.valueCont}>

                    <View style={[CommonStyles.flexDirectionRow, CommonStyles.justifyCenter]}>
                      <BaseText>
                        <BaseText style={[CommonStyles.h6, CommonStyles.centerText, theme.emphasisTryTxt]}>
                          {extraValue.name}
                        </BaseText>
                        <BaseText style={[theme.emphasisSryTxt, CommonStyles.extraSamllText]}> {extraValue.measure}</BaseText>
                      </BaseText>
                    </View>
                    <BaseHorizontalLine/>
                    <View style={CommonStyles.alignCenter}>
                      {
                        extraValue.values.names && (
                          <View style={CommonStyles.flexDirectionRowSpaceBetween}>
                            {
                              extraValue.values.values && extraValue.values.values[0].isGirl !== null && (
                                <View>
                                  <SvgXml xml={femaleIcon(theme.backgroundPrmColor)} width={18} height={18}/>
                                </View>
                              )
                            }
                            {       
                              extraValue.values.names.map((name, idx) => (
                                <BaseText key={idx} numberOfLines={1} style={[
                                  CommonStyles.flexOne,
                                  CommonStyles.centerText,
                                  CommonStyles.extraSamllText,
                                  CommonStyles.boldText]}
                                >
                                  {name}
                                </BaseText>
                              ))
                            }
                          </View>
                        )
                      }
                      {
                        extraValue.values.values?.map((ext, idx) => (
                          <View key={idx} style={CommonStyles.flexDirectionRowSpaceBetween}>
                            {
                              ext.isGirl !== null && (
                                <View>
                                  {
                                    ext.isGirl ? (
                                      <SvgXml xml={femaleIcon('pink')} width={18} height={18}/>
                                    ):(
                                      <SvgXml xml={maleIcon('#A2CDF0')} width={18} height={18}/>
                                    )
                                  }
                                </View>
                              )
                            }
                            {
                              ext.values?.map((value, idx) => (
                                <View key={idx} style={[CommonStyles.flexOne, CommonStyles.alignCenter]}>
                                  <BaseText>{value}</BaseText>
                                </View>
                              ))
                            }
                          </View>
                        ))
                      }
                    </View>

                    <View style={CommonStyles.flexWrapContentSpaceBetween}>

                    </View>
                    <BaseSpace md/>
                  </View>
                ))
              }
            </View>
          </View>
        )
      }
      <BaseHorizontalLine height={2}/>
    </View>
  );
}

export default ValueComp;
