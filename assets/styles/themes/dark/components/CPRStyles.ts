import { StyleSheet } from 'react-native';
import { backgroundSryColor, borderPrmColor, shadow } from '../constants';
import { mdSpace, smBrRadius, smSpace, thinBorder, xbgSpace } from '../../../CommonStyles';

export const CPRStyles = StyleSheet.create({
  fileRow:{
    backgroundColor: backgroundSryColor,
    borderColor: borderPrmColor,
    borderWidth: thinBorder,
    borderRadius: smBrRadius,
    marginVertical: smSpace,
    flexDirection: 'row',
  },
  fileGoToFileBtn:{
    paddingHorizontal: smSpace,
    paddingVertical: mdSpace,
    flex: 1,
  },
  fileOptBtn:{
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  confirmSheet:{
    backgroundColor: backgroundSryColor,
    paddingVertical: xbgSpace,
    paddingHorizontal: mdSpace,
    borderRadius: smBrRadius,
    justifyContent: 'center',
  },
});
