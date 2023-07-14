/** @Components_Styles */
import { constants } from './constants';
import { CommonStyles } from '../../CommonStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
import { NavigationStyles } from './components/NavigationStyles';
/** */

export const darkTheme = {
  ...CommonStyles,

  ...constants,

  BaseSreenStyles: BaseScreenStyles,
  NavigationStyles: NavigationStyles,
};
