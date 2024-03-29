import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

/** @Assets */
import { burgerMenuIcon } from 'icons';
/** */

/** @Hooks */
import { useAppSelector, getThemeState } from '../../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
/** */

interface DrawerButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

function DrawerButton(props: DrawerButtonProps) {
  /** @Variabales */
  const {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    navigation,
  } = props;
  const theme = useSelector((rootState: RootState) => getThemeState(rootState).value);
  /** */

  function openLeftDrawer() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <TouchableOpacity onPress={openLeftDrawer} style={{paddingRight: 10}}>
      <SvgXml xml={burgerMenuIcon(theme.headerTextColor)} width={35} height={35} />
    </TouchableOpacity>
  );
}

export default DrawerButton;
