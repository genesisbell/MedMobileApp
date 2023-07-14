/** @Components_Styles */
import { constants } from './constants';
import { CommonStyles } from '../../CommonStyles';
import { NavigationStyles } from './components/NavigationStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
/** */

export const lightTheme = {
  ...CommonStyles,

  ...constants,

  BaseSreenStyles: BaseScreenStyles,
  NavigationStyles: NavigationStyles,
};
