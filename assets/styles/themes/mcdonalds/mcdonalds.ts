/** @Components_Styles */
import { CommonStyles, sharedColors } from '../../CommonStyles';
import { NavigationStyles } from './components/NavigationStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
/** */

/** @App_Colors */
//Prm: Primary
//Sry: Secondary
//Try: Tertiary

export const primaryColor = 'yellow';
export const secondaryColor = '#787a91';

export const backgroundPrmColor = 'yellow';
export const backgroundSryColor = 'red';
export const backgroundTryColor = 'red';

export const textPrmColor = 'red';
export const textSryColor = 'yellow';

export const headerBgColor = '#041C32';
export const headerTextColor = '#DFDFDF';
export const bottomBgColor = '#252525';

export const menuIconActiveColor = 'yellow';
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

export const mcDonaldsTheme = {

  ...CommonStyles,

  ...singleVariables,

  BaseSreenStyles: BaseScreenStyles,
  NavigationStyles: NavigationStyles,
};
