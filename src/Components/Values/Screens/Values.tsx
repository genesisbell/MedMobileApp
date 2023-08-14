import React from 'react';
import { Text } from 'react-native';

/** @Components */
import BaseScreen from '../../Common/BaseScreen';
import ValueComp from '../Components/ValueComp';
/** */

function Values() {
  return (
    <BaseScreen>
      <Text>this is the values screen</Text>
      <ValueComp/>
    </BaseScreen>
  );
}

export default Values;
