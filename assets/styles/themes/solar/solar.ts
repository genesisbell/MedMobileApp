/** @Components_Styles */
import { constants } from './constants';
import { CommonStyles } from '../../CommonStyles';
import { NavigationStyles } from './components/NavigationStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
import { BaseTextInputStyles } from './components/common/BaseTextInputStyles';
import { BaseActionSheetStyles } from './components/common/BaseActionSheetStyles';
import { FavoritesStyles } from './components/FavoritesStyles';
import { ValuesStyles } from './components/ValuesStyles';
import { BaseModalStyles } from './components/common/BaseModalStyles';
import { BaseButtonStyles } from './components/common/BaseButtonStyles';
/** */

export const solarTheme = {
  ...CommonStyles,

  ...constants,

  BaseActionSheetStyles: BaseActionSheetStyles,
  BaseButtonStyles: BaseButtonStyles,
  BaseModalStyles: BaseModalStyles,
  BaseScreenStyles: BaseScreenStyles,
  BaseTextInputStyles: BaseTextInputStyles,

  FavoritesStyles: FavoritesStyles,
  NavigationStyles: NavigationStyles,
  ValuesStyles: ValuesStyles,
};
