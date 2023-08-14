import React from 'react';
import { View, Text } from 'react-native';

/** @Components */
import BaseScreen from '../../Common/BaseScreen';
import { CommonStyles } from 'styles';
/** */

function ValueComp() {
  return (
    <View>
      <View>
        <Text style={CommonStyles.h3}>Biometría hemática</Text>
      </View>
    </View>
  );
}

export default ValueComp;
