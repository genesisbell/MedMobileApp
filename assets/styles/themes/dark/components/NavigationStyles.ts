import { Platform, StyleSheet } from 'react-native';
import { bgSpace, h5Size, tabBarHeight, thickBorder } from '../../../CommonStyles';
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
  },
  drawerBottomCont: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  leftNavBtn:{
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftNavTxt:{
    fontSize: h5Size,
  }
});
