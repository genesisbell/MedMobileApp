import React, {useState} from 'react';
import {View, StyleSheet, PixelRatio, Text, Button} from 'react-native';
import CircularProgress from './CircularProgress';
import { BaseButton } from '../BaseButton';

const radius = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringChartContainer: {
    width: radius * 2,
    height: radius * 2,
  },
});

export function AnimatedProgress(){
  const cref = React.useRef<any>();
  const [key, setKey] = useState(0);
  return (
    <View style={styles.container}>
      <BaseButton onPress={() => {
        cref.current?.start();
      }} text={'waht'}/>
      <BaseButton onPress={() => {
        setKey(Math.random())
      }} text={'stop'}/>
      <View style={styles.ringChartContainer}>

        <CircularProgress
          key={key}
          ref={cref}
          strokeWidth={STROKE_WIDTH}
          radius={radius}
          backgroundColor="#f93986"
          percentageComplete={100}
          duration={1500}
        ><Text>somethi</Text></CircularProgress>
      </View>
    </View>
  )
}
