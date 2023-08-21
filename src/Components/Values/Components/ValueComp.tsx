import React, { Fragment, useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { SvgXml } from 'react-native-svg';

/** @Assets */
import { CommonStyles } from 'styles';
import { values} from 'data';
import { chevronArrow, femaleIcon, maleIcon, referenceIcon } from 'icons';
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

const data = values('en');
interface ValueComp {
  item: typeof data[0];
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
  const currData = getCurrentData();
  /** */

  /** @Handlers */
  function getCurrentData(){
    let left = 0;
    while (left <= data.length - 1) {

      if(data[left].age === age || left + 1 === data.length ){
        return data[left];
      }

      if(data[left].age < age && data[left + 1].age > age){
        return data[left];
      }

      left = left + 1;

    }

    return data[left];
  }

  function handleOpen(){
    setOpen(prevState => !prevState);
  }
  /** */

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
                            <BaseText style={[CommonStyles.h6, CommonStyles.centerText, {color: theme.tertiaryColor}]}>
                              {d.name}
                            </BaseText>
                            <BaseText style={[{color: theme.secondaryColor}, CommonStyles.extraSamllText]}> {d.measure}</BaseText>
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
