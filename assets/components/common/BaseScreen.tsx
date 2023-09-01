import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

/** @Assets */
import { CommonStyles, bgSpace, tabBarHeight } from 'styles';
import { useAppSelector, getThemeState } from '../../../src/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store';
/***/

interface BaseScreenProps extends ViewProps {
  isKeyboardAvoidingView?: boolean;
  isKeyboardAvoidingViewNative?: boolean;
  isCompleteScreen?: boolean;
  isScrollable?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  loading?: boolean;
}

interface ScreenProps {
  style: StyleProp<ViewStyle>;
  children: React.ReactNode;
  scrollable?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  loading?: boolean;
}

const isIos = Platform.OS === 'ios';

function Screen(props: ScreenProps) {
  const { loading, style, children, scrollable, extraStyle, backgroundColor } = props;
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);

  const baseStyle = [
    theme.BaseScreenStyles.screen,
    {
      backgroundColor,
      paddingBottom: isIos ? 0 : bgSpace,
    },
    extraStyle,
  ];

  if (loading === true)
    return (
      <View style={style || baseStyle}>
        <View
          style={{
            paddingHorizontal: bgSpace,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size={'large'} color={theme.primaryColor} />
        </View>
      </View>
    );

  if (scrollable) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={style || baseStyle}
        >
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }

  return <View style={style || baseStyle}>{children}</View>;
}

export function BaseScreen(props: BaseScreenProps) {
  const {
    style,
    children,
    isKeyboardAvoidingView,
    isKeyboardAvoidingViewNative,
    isScrollable,
    extraStyle,
    backgroundColor,
    loading,
    isCompleteScreen,
  } = props;

  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  const scrollable = isScrollable === undefined ? true : isScrollable;
  const bgColor = backgroundColor || theme.backgroundPrmColor;

  if (isCompleteScreen) {
    return (
      //Change to KeyboardAwareScrollView
      <KeyboardAvoidingView
        contentContainerStyle={CommonStyles.flexOne}
        // alwaysBounceVertical={false}
      >
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
        <Screen
          style={style}
          scrollable={scrollable}
          extraStyle={extraStyle}
          backgroundColor={bgColor}
          loading={loading}
        >
          {children}
        </Screen>
      </KeyboardAvoidingView>
    );
  }
  return (
    <SafeAreaView style={[CommonStyles.flexOne, { backgroundColor: bgColor }]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={theme.headerBgColor} />
      {isIos ? (
        isKeyboardAvoidingViewNative ? (
          <KeyboardAvoidingView
            behavior={'padding'}
            style={CommonStyles.flexOne}
            keyboardVerticalOffset={tabBarHeight + 20}
          >
            <Screen
              style={style}
              scrollable={scrollable}
              extraStyle={extraStyle}
              backgroundColor={bgColor}
              loading={loading}
            >
              {children}
            </Screen>
          </KeyboardAvoidingView>
        ) : isKeyboardAvoidingView ? (
          //Change to KeyboardAwareScrollView
          <KeyboardAvoidingView
            contentContainerStyle={CommonStyles.flexOne}
            // alwaysBounceVertical={false}
          >
            <Screen
              style={style}
              scrollable={scrollable}
              extraStyle={extraStyle}
              backgroundColor={bgColor}
              loading={loading}
            >
              {children}
            </Screen>
          </KeyboardAvoidingView>
        ) : (
          <Screen
            style={style}
            scrollable={scrollable}
            extraStyle={extraStyle}
            backgroundColor={bgColor}
            loading={loading}
          >
            {children}
          </Screen>
        )
      ) : (
        <Screen
          style={style}
          scrollable={scrollable}
          extraStyle={extraStyle}
          backgroundColor={bgColor}
          loading={loading}
        >
          {children}
        </Screen>
      )}
    </SafeAreaView>
  );
}
