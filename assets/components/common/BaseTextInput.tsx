import React, { useState, useRef, useEffect } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  TextInput,
  TextInputProps,
  TextLayoutEventData,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

/** @Assets */
import { inputHelperButtonWidth, smBrRadius } from 'styles';
/***/

import { getThemeState } from '../../../src/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store';
import BaseErrors from './BaseErrors';

export type ModeType = 'flat' | 'outlined';
interface BaseTextInputProps extends TextInputProps {
  value: string;
  placeholder: string;
  name?: string;
  auxButtons?: Array<{
    icon: React.ReactElement;
    onPress?: (name?: string) => void;
  }>;
  onChangeText: (value: string, name?: string) => void;
  mode?: ModeType;
  disabled?: boolean;
  error?:{
    errors: Array<string>,
    visible: boolean
  }
}

export function BaseTextInput(props: BaseTextInputProps) {
  /** @Variables */
  const {
    value,
    name,
    placeholder,
    multiline,
    onChangeText,
    auxButtons,
    secureTextEntry,
    autoCapitalize,
    keyboardType,
    mode,
    disabled,
    error,
  } = props;

  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  const [inputHeight, setHeight] = useState(0);
  const [placeholderWidth, setWidth] = useState(0);
  const [inputWidth, setInputWidth] = useState(0);
  const [color, setColor] = useState(theme.textSryColor);
  const [showBorder, setShowBorder] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const currentMode = mode || 'outlined';
  const containerStyle = disabled
    ? theme.BaseTextInputStyles.inputContainerDisabled
    : theme.BaseTextInputStyles.inputContainer;

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -inputHeight / 2],
  });
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -placeholderWidth / 8],
  });
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 3 / 4],
  });
  /***/

  /** @useEffect */

  useEffect(() => {
    value && animate(1);
  }, [value]);

  /***/

  /** @Handlers **/
  const handleOnFocus = () => {
    if (!disabled) {
      animate(1);
      setColor(theme.primaryColor);
      setShowBorder(true);
    }
  };

  const handleOnBlur = () => {
    if (!disabled) {
      !value && animate(0);
      setColor(theme.textSryColor);
      setShowBorder(false);
    }
  };

  const animate = (val: number) => {
    Animated.spring(animation, {
      toValue: val,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };

  const handleInputLayout = (e: LayoutChangeEvent) => {
    if (!inputHeight) {
      if (multiline) {
        setHeight(36); //Input padding -> 20 + font size -> 16 = 36
      } else {
        setHeight(e.nativeEvent.layout.height);
      }
    }

    if (!inputWidth) {
      const width =
        e.nativeEvent.layout.width - (auxButtons ? auxButtons.length * inputHelperButtonWidth : 0);
      setInputWidth(width);
      if (placeholderWidth > width) setWidth(width);
    }
  };

  const handleTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    if (!placeholderWidth) {
      setWidth(e.nativeEvent.lines[0]?.width || 0);
    }
  };
  /***/

  if (auxButtons && auxButtons.length > 2) {
    console.error(
      'Too many aux buttons. BaseTextInput component only accepts two or less aux buttons',
    );
    return null;
  }

  return (
    <View>
      <View
        style={[
          currentMode === 'flat' ? theme.BaseTextInputStyles.inputContainerFlat : containerStyle,
          showBorder && theme.BaseTextInputStyles.border,
        ]}
        onLayout={handleInputLayout}
      >
        <View style={{ height: inputHeight, ...theme.BaseTextInputStyles.placeholderContainer }}>
          <Animated.Text
            style={[
              theme.BaseTextInputStyles.placeholder,
              {
                transform: [{ translateY }, { translateX }, { scale }],
                color,
                maxWidth: inputWidth,
              },
            ]}
            onTextLayout={handleTextLayout}
            numberOfLines={1}
          >
            {placeholder}
          </Animated.Text>
        </View>
        <TextInput
          value={value}
          style={[
            theme.BaseTextInputStyles.input,
            multiline && theme.BaseTextInputStyles.multiline,
            {
              marginRight: auxButtons ? auxButtons.length * inputHelperButtonWidth : 0,
            },
          ]}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChangeText={(value) => onChangeText(value, name)}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
        />
        {auxButtons && auxButtons.length > 0 && (
          <View style={theme.BaseTextInputStyles.buttonsContainer}>
            {auxButtons?.map((button, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => button.onPress && button.onPress(name)}
              >
                <View
                  style={[
                    currentMode === 'flat'
                      ? theme.BaseTextInputStyles.buttonFlat
                      : theme.BaseTextInputStyles.button,
                    {
                      borderTopRightRadius: index === auxButtons.length - 1 ? smBrRadius : 0,
                      borderBottomRightRadius: index === auxButtons.length - 1 ? smBrRadius : 0,
                    },
                  ]}
                >
                  {button.icon}
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        )}
      </View>
      <BaseErrors errors={error?.errors} visible={error?.visible || false}/>
    </View>
  );
}
