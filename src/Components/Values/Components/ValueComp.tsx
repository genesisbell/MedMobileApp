import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

/** @Assets */
import { CommonStyles } from 'styles';
import { values} from 'data';
/** */

/** @Components */
import { 
  BaseHorizontalLine,
  BaseSpace,
  BaseText
} from 'components';
/** */

import { useAppSelector } from '../../../app/hooks';
import { SvgXml } from 'react-native-svg';
import { chevronArrow } from 'icons';

const data = values('en');
interface ValueComp {
  item: typeof data[0];
}

function ValueComp({item}: ValueComp) {

  /** @Variables */
  const {patient, theme} = useAppSelector(({ patient, theme }) => (
    {
      patient,
      theme: theme.value,
    }
  ));
  const [open, setOpen] = useState(false);
  const {name, data} = item;
  const age = patient.years*12 + patient.months;
  const currData = data.find(d => d.age >= age);
  /** */

  /** @Handlers */
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
          <BaseText style={CommonStyles.h3}>{name}</BaseText>
        </View>
        {
          open && (
            <View style={CommonStyles.flexWrapContentSpaceBetween}>
              {
                currData?.values.map((d, idx) => (
                  <View key={idx} style={theme.ValuesStyles.valueCont}>
                    <BaseText style={[CommonStyles.h6, CommonStyles.centerText, {color: theme.primaryColor}]}>{d.name}</BaseText>
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
                ))
              }
            </View>
          )
        }
        <BaseSpace/>
        <BaseHorizontalLine color={theme.primaryColor}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ValueComp;
