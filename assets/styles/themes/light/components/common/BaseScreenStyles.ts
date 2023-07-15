import { StyleSheet } from 'react-native';
import { bgSpace, mdSpace, smSpace } from '../../../../CommonStyles';

export const paddingHorizontalScreen = bgSpace * 2;

export const BaseScreenStyles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingHorizontal: bgSpace,
    marginTop: mdSpace,
  },
  screenWOPadding: {
    flexGrow: 1,
  },
});
