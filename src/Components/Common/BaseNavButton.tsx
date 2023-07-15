import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BaseNavButton() {
  const BaseNavButtonStyles = StyleSheet.create({
    mainCont: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    button: {
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 125,
    },
  });

  return (
    <View style={BaseNavButtonStyles.button}>
      <Text>nav nav button</Text>
    </View>
  );
}

export default React.memo(BaseNavButton);
