import React, {useImperativeHandle, forwardRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedProps, withTiming, useDerivedValue, withRepeat } from 'react-native-reanimated';
import { BaseButton } from '../BaseButton';

type CircularProgressProps = {
  strokeWidth: number;
  radius: number;
  color: string;
  backgroundColor: string;
  percentageComplete: number;
  duration: number;
  children?: React.ReactNode;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function CircularProgress(props: CircularProgressProps, ref: any){
  const {
    radius,
    strokeWidth,
    color,
    backgroundColor,
    percentageComplete,
    duration,
    children,
  } = props;
  useImperativeHandle(ref, () => ({
    start: () => {theta.value = animateTo.value},
  }));
  
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const invertedCompletion = (100 - percentageComplete) / 100;
  const theta = useSharedValue(2 * Math.PI);
  const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withRepeat(withTiming(theta.value * innerRadius, {
        duration,
      }), -1)
    }
  })

  return (
    <View style={{
      width: radius * 2,
      height: radius * 2
    }}>
      <View style={styles.container}>
        <Svg style={StyleSheet.absoluteFill}>

          <Circle cx={radius} cy={radius} strokeWidth={strokeWidth} r={innerRadius} stroke={backgroundColor}/>
          <AnimatedCircle
            animatedProps={animatedProps}
            cx={radius}
            cy={radius}
            fill={'transparent'}
            r={innerRadius}
            strokeWidth={strokeWidth}
            stroke={color}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * invertedCompletion}
            // strokeLinecap='round'
          />
        </Svg>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default forwardRef(CircularProgress);
