import { StyleSheet } from 'react-native';
import { bgSpace, mdSpace, normalBorder, smSpace, xsmSpace } from '../../../CommonStyles';
import { backgroundPrmColor, borderPrmColor, shadow } from '../constants';

export const ValuesStyles = StyleSheet.create({
  valueCont: {
    margin: smSpace,
    borderWidth: normalBorder,
    borderColor: borderPrmColor,
    backgroundColor: backgroundPrmColor,
    borderRadius: smSpace,
    padding: xsmSpace,
    ...shadow
  },
  ghostCont:{
    flexBasis: '100%',
    marginVertical: mdSpace,
    borderWidth: .2,
    borderStyle: 'dashed',
    borderColor: 'grey',
  }
});
