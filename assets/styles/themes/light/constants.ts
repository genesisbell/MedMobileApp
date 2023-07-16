/** @App_Colors */
//Prm: Primary
//Sry: Secondary
//Try: Tertiary

import { smText } from "../../CommonStyles";

export const primaryColor = '#54BAB9';
export const secondaryColor = '#787a91';

export const backgroundPrmColor = '#EEEEEE';
export const backgroundSryColor = '#FFFFFF';
export const backgroundTryColor = '#FFFFFF';

export const textPrmColor = '#252525';
export const textSryColor = '#787a91';

export const borderPrmColor = '#E5E5E5';
export const borderSryColor = '#DEDEDE';

export const systemIosColor = '#007aff';

export const headerBgColor = '#54BAB9';
export const headerTextColor = '#FFFFFF';

export const menuIconActiveColor = '#54BAB9';
export const menuIconInactiveColor = '#787a91';
export const bottomBgColor = '#FFFFFF';
/** */

export const shadow = {
  shadowColor: backgroundTryColor,
  shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,

  elevation: 2,
};

export const textStyles = {
  prmTxt:{
    color: textPrmColor,
  },
  subText:{
    color: textSryColor,
  },
  subSmText:{
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
}

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
