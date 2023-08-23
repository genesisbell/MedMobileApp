/** @App_Colors */
//Prm: Primary
//Sry: Secondary
//Try: Tertiary

import { smText } from '../../CommonStyles';

export const primaryColor = '#114B97';
export const secondaryColor = '#F86F03';
export const tertiaryColor = '#6F61C0';
export const quarternaryColor = '#FFA41B';

export const backgroundPrmColor = '#252525';
export const backgroundSryColor = '#181818';
export const backgroundTryColor = '#FFFFFF';

export const textPrmColor = '#CECECE';
export const textSryColor = '#787a91';

export const borderPrmColor = '#444444';
export const borderSryColor = '#5D5D5D';

export const headerBgColor = '#092A54';
export const headerTextColor = '#DFDFDF';
export const bottomBgColor = '#252525';

export const systemIosColor = '#007aff';

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
  emphasisPrmTxt: {
    color: primaryColor
  },
  emphasisSryTxt: {
    color: secondaryColor
  },
  emphasisTryTxt: {
    color: tertiaryColor
  },
  emphasisQryTxt: {
    color: quarternaryColor
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
