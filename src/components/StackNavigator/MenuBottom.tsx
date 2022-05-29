import React, { Fragment } from 'react';
import { StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgXml } from 'react-native-svg';

import { RootStackParams } from './Tabs';
import { useAppSelector } from '../../app/hooks';

//Assets
import { IconsMenuBottom } from 'icons';

interface MenuBottomProps {
  tab: number;
  icon: string;
  text: string;
  onPress: () => void;
}

export default function MenuBottom() {
  const theme = useAppSelector(({ theme }) => theme.value);
  const language = useAppSelector(({ language }) => language.value);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute();

  let selectedTab = 0;

  switch (getFocusedRouteNameFromRoute(route)) {
    case 'undefined':
      selectedTab = 0;
      break;

    case 'HomeStack':
      selectedTab = 0;
      break;

    case 'AnimacionesStack':
      selectedTab = 1;
      break;

    default:
      break;
  }

  const styles = StyleSheet.create({
    absoluteCont: {
      height: 80,
      backgroundColor: theme.menuBottomBackgroundColor,
      paddingTop: 10,
      paddingHorizontal: 15,
      width: '100%',
    },

    mainCont: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textOn: {
      color: theme.textActive,
      fontWeight: '600',
    },

    textOff: {
      color: theme.textInactive,
    },
  });

  const options = [
    {
      tab: 0,
      icon: IconsMenuBottom.home(
        30,
        selectedTab === 0 ? theme.active : 'none',
        selectedTab === 0 ? 'none' : theme.inactive,
      ),
      text: language.menuBottom.home,
      onPress: () => navigation.navigate('HomeStack'),
    },
    {
      tab: 1,
      icon: IconsMenuBottom.animaciones(
        30,
        'none',
        selectedTab === 1 ? theme.active : theme.inactive,
      ),
      text: language.menuBottom.animaciones,
      onPress: () => navigation.navigate('AnimacionesStack'),
    },
  ];

  function MenuButton({ icon, text, onPress, tab }: MenuBottomProps) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <SvgXml xml={icon} />
          <Text style={tab === selectedTab ? styles.textOn : styles.textOff}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <Fragment>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.absoluteCont}>
        <View style={styles.mainCont}>
          {options.map((op) => (
            <MenuButton
              key={op.tab}
              tab={op.tab}
              icon={op.icon}
              text={op.text}
              onPress={op.onPress}
            />
          ))}
        </View>
      </View>
    </Fragment>
  );
}
