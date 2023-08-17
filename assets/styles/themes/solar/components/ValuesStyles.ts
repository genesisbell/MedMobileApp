import { StyleSheet } from 'react-native';
import { bgSpace, normalBorder, smSpace, xsmSpace } from '../../../CommonStyles';
import { backgroundPrmColor, borderPrmColor, shadow } from '../constants';

export const ValuesStyles = StyleSheet.create({
  valueCont: {
    margin: smSpace,
    borderWidth: normalBorder,
    borderColor: borderPrmColor,
    backgroundColor: backgroundPrmColor,
    borderRadius: smSpace,
    padding: xsmSpace,
    marginBottom: bgSpace,
    ...shadow
  },
});
