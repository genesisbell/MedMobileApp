/** @Components_Styles */
import { CommonStyles, sharedColors } from '../../CommonStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
import { NavigationStyles } from './components/NavigationStyles';
/** */

/** @App_Colors */
//Prm: Primary
//Sry: Secondary
//Try: Tertiary

export const primaryColor = '#54BAB9';
export const secondaryColor = '#787a91';

export const backgroundPrmColor = '#181818';
export const backgroundSryColor = '#041C32';
export const backgroundTryColor = '#252525';

export const textPrmColor = '#DFDFDF';
export const textSryColor = '#787a91';

export const headerBgColor = '#041C32';
export const headerTextColor = '#DFDFDF';
export const bottomBgColor = '#252525';

export const menuIconActiveColor = '#54BAB9';
export const menuIconInactiveColor = '#787a91';
/** */

export const singleVariables = {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  backgroundPrmColor: backgroundPrmColor,
  backgroundSryColor: backgroundSryColor,
  backgroundTryColor: backgroundTryColor,

  textPrmColor: textPrmColor,
  textSryColor: textSryColor,

  headerBgColor: headerBgColor,
  headerTextColor: headerTextColor,
  bottomBgColor: bottomBgColor,

  menuIconActiveColor: menuIconActiveColor,
  menuIconInactiveColor: menuIconInactiveColor,
};

export const darkTheme = {
  
  ...CommonStyles,

  ...singleVariables,

  BaseSreenStyles: BaseScreenStyles,
  NavigationStyles: NavigationStyles,
};
