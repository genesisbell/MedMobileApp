import { Platform, StyleSheet } from 'react-native';
import { bgSpace, tabBarHeight, thickBorder } from '../../../CommonStyles';
import { bottomBgColor } from '../constants';

export const NavigationStyles = StyleSheet.create({
  absoluteCont: {
    height: tabBarHeight,
    backgroundColor: bottomBgColor,
  },
  button: {
    alignItems: 'center',
    justifyContent: Platform.OS == 'android' ? 'flex-end' : 'center',
    borderTopWidth: thickBorder,
    height: (tabBarHeight / 5) * 4,
  },
  drawerButton: {
    marginLeft: bgSpace,
  },
  drawerMainCont: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  drawerBottomCont: {
    bottom: 0,
  },
});
