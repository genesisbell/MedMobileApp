/** @App_Colors */
//Prm: Primary
//Sry: Secondary
//Try: Tertiary

import { smText } from '../../CommonStyles';

export const primaryColor = '#54BAB9';
export const secondaryColor = '#787a91';

export const backgroundPrmColor = '#fdf6e3';
export const backgroundSryColor = '#f5e5b8';
export const backgroundTryColor = 'red';

export const textPrmColor = '#576e75';
export const textSryColor = '#35535c';

export const borderPrmColor = '#EEEEEE';
export const borderSryColor = '#DEDEDE';

export const systemIosColor = '#007aff';

export const headerBgColor = '#f5e5b8';
export const headerTextColor = '#35535c';
export const bottomBgColor = '#F3EEDE';

export const menuIconActiveColor = '#54BAB9';
export const menuIconInactiveColor = '#787a91';
/** */

export const shadow = {
  shadowColor: backgroundTryColor,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
};

export const textStyles = {
  prmTxt: {
    color: textPrmColor,
  },
  subText: {
    color: textSryColor,
  },
  subSmText: {
    color: textSryColor,
    fontStyle: 'italic',
    fontSize: smText,
  },
  // popText:{
  //   color: popTextColor,
  // },
  // tryText:{
  //   color: textTryColor,
  // },
  // errText:{
  //   color: errColor,
  // },
  // successText:{
  //   color: textSuccessColor,
  // }
};

export const constants = {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  backgroundPrmColor: backgroundPrmColor,
  backgroundSryColor: backgroundSryColor,
  backgroundTryColor: backgroundTryColor,

  textPrmColor: textPrmColor,
  textSryColor: textSryColor,

  borderPrmColor: borderPrmColor,
  borderSryColor: borderSryColor,

  systemIosColor: systemIosColor,

  headerBgColor: headerBgColor,
  headerTextColor: headerTextColor,
  bottomBgColor: bottomBgColor,

  menuIconActiveColor: menuIconActiveColor,
  menuIconInactiveColor: menuIconInactiveColor,

  ...shadow,
  ...textStyles,
};