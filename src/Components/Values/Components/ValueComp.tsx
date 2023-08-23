import React, { Fragment, useState } from 'react';
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
  const {key, name, data, reference} = item;
  const age = patient.years*12 + patient.months;
  const currData = getCurrentDataBasedOnAge(data, age);
  /** */

  /** @Handlers */
  function handleOpen(){
    setOpen(prevState => !prevState);
  }
  /** */

  if(key === 'fluids'){
    return (    
      <TouchableWithoutFeedback onPress={handleOpen}>
        <View>
          <View style={CommonStyles.flexDirectionRow}>
            <View style={open ? CommonStyles.rotate180deg : CommonStyles.rotate90deg}>
              <SvgXml xml={chevronArrow(theme.primaryColor)} width={20} height={20}/>
            </View>
            <BaseSpace horizontal/>
            <BaseText style={[CommonStyles.h3, CommonStyles.flexOne]}>{name}</BaseText>
            <BaseModal
              iconStyle={{paddingLeft: 10}}
              icon={<SvgXml xml={referenceIcon(theme.primaryColor)} width={20} height={20}/>}
            >
              <BaseText style={CommonStyles.boldText}>{language.general.reference}</BaseText>
              <BaseText>{reference}</BaseText>
            </BaseModal>
          </View>
          {
            open && (
              <View>
                <View style={CommonStyles.flexDirectionRow}>
                  <View style={CommonStyles.flexThird}/>
                  <View style={[CommonStyles.flexThird, CommonStyles.alignCenter]}>
                    <BaseText style={CommonStyles.boldText}>{language.values.transudate}</BaseText>
                  </View>
                  <View style={[CommonStyles.flexThird, CommonStyles.alignCenter]}>
                    <BaseText style={CommonStyles.boldText}>{language.values.exudate}</BaseText>
                  </View>
                </View>
                {
                  currData?.values.map((d, idx) => (
                    <View key={idx}>
                      <BaseHorizontalLine height={.5}/>
                      <View style={CommonStyles.flexDirectionRow}>

                        <View style={[CommonStyles.flexThird, CommonStyles.justifyCenter]}>
                          <BaseText style={[CommonStyles.h6, theme.emphasisTryTxt]}>
                            {d.name}
                          </BaseText>
                          <BaseText style={[theme.emphasisSryTxt, CommonStyles.extraSamllText]}>
                            {d.measure}
                          </BaseText>
                        </View>

                        {
                          Array.isArray(d.values) && (
                            <>
                              <View style={[CommonStyles.flexThird, CommonStyles.alignCenter]}>
                                <BaseText>{d.values[0].value}</BaseText>
                              </View>

                              <View style={[CommonStyles.flexThird, CommonStyles.alignCenter]}>
                                <BaseText>{d.values[1].value}</BaseText>
                              </View>
                            </>
                          )
                        }
                      </View>
                    </View>
                  ))
                }
              </View>
            )
          }
          <BaseSpace/>
          <BaseHorizontalLine height={2}/>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={handleOpen}>
      <View>
        <View style={CommonStyles.flexDirectionRow}>
          <View style={open ? CommonStyles.rotate180deg : CommonStyles.rotate90deg}>
            <SvgXml xml={chevronArrow(theme.primaryColor)} width={20} height={20}/>
          </View>
          <BaseSpace horizontal/>
          <BaseText style={[CommonStyles.h3, CommonStyles.flexOne]}>{name}</BaseText>
          <BaseModal
            iconStyle={{paddingLeft: 10}}
            icon={<SvgXml xml={referenceIcon(theme.primaryColor)} width={20} height={20}/>}
          >
            <BaseText style={CommonStyles.boldText}>{language.general.reference}</BaseText>
            <BaseText>{reference}</BaseText>
          </BaseModal>
        </View>
        {
          open && (
            <View style={CommonStyles.flexWrapContentSpaceBetween}>
              {
                currData?.values.map((d, idx) => {
                  const isLastGirl = currData?.values[idx].isGirl && currData?.values[idx + 1].isGirl === false;
                  if(!d.values) return null;
                  return (
                    <Fragment key={idx}>
                      <View style={theme.ValuesStyles.valueCont}>

                        <View style={[CommonStyles.flexDirectionRow, CommonStyles.justifyCenter]}>
                          <BaseText>
                            <BaseText style={[CommonStyles.h6, CommonStyles.centerText, theme.emphasisTryTxt]}>
                              {d.name}
                            </BaseText>
                            <BaseText style={[theme.emphasisSryTxt, CommonStyles.extraSamllText]}> {d.measure}</BaseText>
                          </BaseText>
                          {
                            d.isGirl === true && 
                            <View style={CommonStyles.flexDirectionRow}>
                              <BaseSpace xsm horizontal/>
                              <SvgXml xml={femaleIcon('pink')} width={18} height={18}/>
                            </View>
                          }
                          {
                            d.isGirl === false &&
                            <View style={CommonStyles.flexDirectionRow}>
                              <BaseSpace xsm horizontal/>
                              <SvgXml xml={maleIcon('#A2CDF0')} width={18} height={18}/>
                            </View>
                          }
                        </View>
                        <BaseHorizontalLine/>
                        <View style={CommonStyles.flexWrapContentSpaceBetween}>
                          {
                            Array.isArray(d.values) ? d.values.map((dd, idx) => (
                              <View key={idx} style={[
                                CommonStyles.alignCenter,
                                {
                                  marginRight: Array.isArray(d.values) && idx === d.values.length - 1 ? 0 : 15 ,
                                }
                              ]}>
                                <BaseText style={[CommonStyles.extraSamllText, CommonStyles.boldText]}>{dd.name}</BaseText>
                                <BaseText style={CommonStyles.smallText}>{dd.value}</BaseText>
                              </View>
                            )):(
                              <View style={CommonStyles.flexOne}>
                                <BaseText style={[CommonStyles.centerText, CommonStyles.smallText]}>
                                  {d.values}
                                </BaseText>
                              </View>
                            )
                          }
                        </View>
                        <BaseSpace md/>
                      </View>
                      <View style={isLastGirl ? theme.ValuesStyles.ghostCont:CommonStyles.displayNone}/>
                    </Fragment>
                  )
                })
              }
            </View>
          )
        }
        <BaseSpace/>
        <BaseHorizontalLine height={2}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ValueComp;
