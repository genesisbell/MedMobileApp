/** @Components_Styles */
import { constants } from './constants';
import { CommonStyles } from '../../CommonStyles';
import { NavigationStyles } from './components/NavigationStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
import { BaseTextInputStyles } from './components/common/BaseTextInputStyles';
import { BaseActionSheetStyles } from './components/common/BaseActionSheetStyles';
import { FavoritesStyles } from './components/FavoritesStyles';
import { ValuesStyles } from './components/ValuesStyles';
/** */

export const solarTheme = {
  ...CommonStyles,

  ...constants,

  BaseActionSheetStyles: BaseActionSheetStyles,
  BaseScreenStyles: BaseScreenStyles,
  BaseTextInputStyles: BaseTextInputStyles,

  FavoritesStyles: FavoritesStyles,
  NavigationStyles: NavigationStyles,
  ValuesStyles: ValuesStyles,
};
