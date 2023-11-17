/** @App_Colors */
//Prm: Primary
//Sry: Secondary
//Try: Tertiary

import { StyleSheet } from 'react-native';
import { smText } from '../../CommonStyles';

export const primaryColor = '#0C356A';
export const secondaryColor = '#F86F03';
export const tertiaryColor = '#6F61C0';
export const quarternaryColor = '#FFA41B';

export const backgroundPrmColor = '#fdf6e3';
export const backgroundSryColor = '#f5e5b8';
export const backgroundTryColor = 'red';

export const textPrmColor = '#576e75';
export const textSryColor = '#35535c';
export const textTryColor = '#ffffff';

export const borderPrmColor = '#EEEEEE';
export const borderSryColor = '#DEDEDE';

export const systemIosColor = '#007aff';

export const headerBgColor = '#f5e5b8';
export const headerTextColor = '#35535c';
export const bottomBgColor = '#F3EEDE';

export const menuIconActiveColor = '#54BAB9';
export const menuIconInactiveColor = '#787a91';

export const errColor = 'red';
export const successColor = 'green';
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

export const textStyles = StyleSheet.create(
  {
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
    errText:{
      color: errColor,
    },
    // successText:{
    //   color: textSuccessColor,
    // }
  }
);

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
  textTryColor: textTryColor,

  borderPrmColor: borderPrmColor,
  borderSryColor: borderSryColor,

  systemIosColor: systemIosColor,

  headerBgColor: headerBgColor,
  headerTextColor: headerTextColor,
  bottomBgColor: bottomBgColor,

  menuIconActiveColor: menuIconActiveColor,
  menuIconInactiveColor: menuIconInactiveColor,

  errColor: errColor,
  successColor: successColor,

  shadow: shadow,
  
  ...textStyles,
}
