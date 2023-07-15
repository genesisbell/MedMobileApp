import React from 'react';
import { Text } from 'react-native';

/** @Components */
import BaseScreen from '../../Common/BaseScreen';
import BaseNavButton from '../../Common/BaseNavButton';
/** */

function Urgencies() {
  return (
    <BaseScreen>
      <BaseNavButton />
      <Text>this is the urgencies screen</Text>
    </BaseScreen>
  );
}

export default Urgencies;
