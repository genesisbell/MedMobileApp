/** @Components_Styles */
import { NavigationStyles } from './components/NavigationStyles';
import { CommonStyles } from '../../CommonStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
/** */

/** @App_Colors */
//Prm: Primary
//Sry: Secondary
//Try: Tertiary

export const primaryColor = '#54BAB9';
export const secondaryColor = '#787a91';

export const backgroundPrmColor = '#EEEEEE';
export const backgroundSryColor = '#FFFFFF';
export const backgroundTryColor = '#FFFFFF';

export const textPrmColor = '#252525';
export const textSryColor = '#787a91';

export const headerBgColor = '#54BAB9';
export const headerTextColor = '#FFFFFF';

export const menuIconActiveColor = '#54BAB9';
export const menuIconInactiveColor = '#787a91';
export const bottomBgColor = '#FFFFFF';
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

export const lightTheme = {
  ...CommonStyles,

  ...singleVariables,

  BaseSreenStyles: BaseScreenStyles,
  NavigationStyles: NavigationStyles,
};
