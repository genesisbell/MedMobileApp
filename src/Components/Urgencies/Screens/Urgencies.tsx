import React from 'react';
import { Text } from 'react-native';

/** @Components */
import { BaseNavButton, BaseScreen } from 'components';
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
