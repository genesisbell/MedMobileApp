
/** @Components_Styles */
import { NavigationStyles } from './components/NavigationStyles';
import { CommonStyles, sharedColors } from '../../CommonStyles';
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

  menuIconActiveColor: menuIconActiveColor,
  menuIconInactiveColor: menuIconInactiveColor,
}

export const lightTheme = {
  ...sharedColors,

  mainBackgroundColor: '#EEEEEE',
  headerBackgroundColor: '#54BAB9',
  headerStackText: '#EEEEEE',
  menuBottomBackgroundColor: '#FFFFFF',
  active: '#54BAB9',
  inactive: '#787A91',
  text: '#252525',

  ...CommonStyles,

  ...singleVariables,

  BaseSreenStyles: BaseScreenStyles,
  NavigationStyles: NavigationStyles,
};

