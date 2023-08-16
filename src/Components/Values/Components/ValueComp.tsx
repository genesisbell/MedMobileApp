import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

/** @Assets */
import { CommonStyles } from 'styles';
import {bloodCount} from 'data';
/** */

/** @Components */
import BaseHorizontalLine from '../../Common/BaseHorizontal';
import BaseSpace from '../../Common/BaseSpace';
/** */

import { useAppSelector } from '../../../app/hooks';

const data = bloodCount('en');
interface ValueComp {
  item: typeof data[0];
}

function ValueComp({item}: ValueComp) {

  /** @Variables */
  const [open, setOpen] = useState(false);
  const {name, data} = item;
  const currData = data.find(d => d.age === 1);
  const theme = useAppSelector(({ theme }) => theme.value);
  /** */

  /** @Handlers */
  function handleOpen(){
    setOpen(prevState => !prevState);
  }
  /** */

  return (
    <TouchableWithoutFeedback onPress={handleOpen}>
      <View>
        <View>
          <Text style={[CommonStyles.h3, theme.prmTxt]}>{name}</Text>
        </View>
        {
          open && (
            <View style={CommonStyles.flexWrapContentSpaceBetween}>
              {
                currData?.values.map((d, idx) => (
                  <View key={idx}>
                    <Text style={[CommonStyles.bigText, CommonStyles.centerText, theme.prmTxt]}>{d.name}</Text>
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
                            <Text style={[CommonStyles.extraSamllText, CommonStyles.boldText, theme.prmTxt]}>{dd.name}</Text>
                            <Text style={[CommonStyles.smallText, theme.prmTxt]}>{dd.value}</Text>
                          </View>
                        )):(
                          <View style={CommonStyles.flexOne}>
                            <Text style={[CommonStyles.centerText, CommonStyles.smallText, theme.prmTxt]}>
                              {d.values}
                            </Text>
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
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ValueComp;
