import { Dimensions, StyleSheet } from 'react-native';

import {
  actionSheetOptionsHeight,
  h4Size,
  mdBrRadius,
  mdSpace,
  normalBorder,
  smBrRadius,
  smSpace,
  xsmSpace,
} from '../../../../CommonStyles';
import {
  backgroundPrmColor,
  backgroundSryColor,
  borderPrmColor,
  shadow,
  systemIosColor,
  textPrmColor,
  textSryColor,
} from '../../constants';

const vh = Dimensions.get('window').height;

export const BaseActionSheetStyles = StyleSheet.create({
  dropdownSection: {
    backgroundColor: backgroundSryColor,
    marginVertical: smSpace,
    paddingTop: xsmSpace,
    paddingHorizontal: mdSpace,
    borderRadius: smBrRadius,
    justifyContent: 'center',
    ...shadow,
  },
  messageText: {
    color: textSryColor,
    marginBottom: smSpace,
  },
  actionSheetContainer: {
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    maxHeight: vh * 0.65,
    position: 'relative',
    bottom: mdSpace,
  },
  buttonsContainer: {
    borderRadius: mdBrRadius,
    backgroundColor: backgroundPrmColor,
    marginHorizontal: mdSpace,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: actionSheetOptionsHeight,
    borderBottomWidth: normalBorder,
    borderColor: borderPrmColor,
    backgroundColor: backgroundPrmColor,
    borderRadius: mdBrRadius,
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: actionSheetOptionsHeight,
    borderRadius: mdBrRadius,
    marginHorizontal: mdSpace,
    marginBottom: mdSpace,
  },
  buttonText: {
    fontSize: h4Size,
    color: systemIosColor,
  },
  buttonCancelText: {
    fontSize: h4Size,
    fontWeight: 'bold',
  },
});
