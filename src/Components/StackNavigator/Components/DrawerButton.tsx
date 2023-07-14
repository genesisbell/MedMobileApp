import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

/** @Assets */
import { burgerMenuIcon } from 'icons';
/** */

/** @Hooks */
import { useAppSelector } from '../../../app/hooks';
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
  const theme = useAppSelector(({ theme }) => theme.value);
  /** */

  function openLeftDrawer() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <TouchableOpacity onPress={openLeftDrawer} style={theme.NavigationStyles.drawerButton}>
      <SvgXml xml={burgerMenuIcon(theme.headerTextColor)} width={35} height={35} />
    </TouchableOpacity>
  );
}

export default DrawerButton;
