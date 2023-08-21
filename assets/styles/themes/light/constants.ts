/** @App_Colors */
//Prm: Primary
//Sry: Secondary
//Try: Tertiary

import { smText } from '../../CommonStyles';

export const primaryColor = '#0C356A';
export const secondaryColor = '#F86F03';
export const tertiaryColor = '#6F61C0';
export const quarternaryColor = '#FFA41B';

export const backgroundPrmColor = '#EEEEEE';
export const backgroundSryColor = '#FFFFFF';
export const backgroundTryColor = '#2F343B';

export const textPrmColor = '#252525';
export const textSryColor = '#787a91';

export const borderPrmColor = '#E5E5E5';
export const borderSryColor = '#DEDEDE';

export const systemIosColor = '#007aff';

export const headerBgColor = '#0C356A';
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
  tertiaryColor: tertiaryColor,
  quarternaryColor: quarternaryColor,
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

  shadow: shadow,
  
  ...textStyles,
};
