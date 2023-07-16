/** @Components_Styles */
import { constants } from './constants';
import { CommonStyles } from '../../CommonStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
import { NavigationStyles } from './components/NavigationStyles';
import { BaseTextInputStyles } from './components/common/BaseTextInputStyles';
import { BaseActionSheetStyles } from './components/common/BaseActionSheetStyles';
import { FavoritesStyles } from './components/FavoritesStyles';
/** */

export const darkTheme = {
  ...CommonStyles,

  ...constants,

  BaseActionSheetStyles: BaseActionSheetStyles,
  BaseScreenStyles: BaseScreenStyles,
  BaseTextInputStyles: BaseTextInputStyles,

  FavoritesStyles: FavoritesStyles,
  NavigationStyles: NavigationStyles,
};
