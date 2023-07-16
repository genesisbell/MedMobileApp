import { StyleSheet } from 'react-native';
import { backgroundSryColor, borderPrmColor, shadow } from '../constants';
import { smBrRadius, smSpace, thinBorder } from '../../../CommonStyles';

export const FavoritesStyles = StyleSheet.create({
  ageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: backgroundSryColor,
    borderRadius: smBrRadius,
    marginVertical: smSpace,
    height: 42,
    alignItems: 'center',
    paddingHorizontal: smSpace,
    ...shadow,
  },
  selectedAgeCont: {
    alignItems: 'flex-end',
    flex: 1,
    paddingHorizontal: smSpace,
  },
  ageMsg: {
    height: '50%',
    justifyContent: 'center',
    paddingHorizontal: smSpace,
    borderLeftWidth: thinBorder,
    borderLeftColor: borderPrmColor,
  },
});
