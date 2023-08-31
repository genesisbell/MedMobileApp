/** @Components_Styles */
import { constants } from './constants';
import { CommonStyles } from '../../CommonStyles';
import { BaseActionSheetStyles } from './components/common/BaseActionSheetStyles';
import { BaseButtonStyles } from './components/common/BaseButtonStyles';
import { BaseModalStyles } from './components/common/BaseModalStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
import { BaseTextInputStyles } from './components/common/BaseTextInputStyles';
import { BaseTextStyles } from './components/common/BaseTextStyles';
import { FavoritesStyles } from './components/FavoritesStyles';
import { NavigationStyles } from './components/NavigationStyles';
import { ValuesStyles } from './components/ValuesStyles';
/** */

export const lightTheme = {
  ...CommonStyles,

  ...constants,

  BaseActionSheetStyles: BaseActionSheetStyles,
  BaseButtonStyles: BaseButtonStyles,
  BaseModalStyles: BaseModalStyles,
  BaseScreenStyles: BaseScreenStyles,
  BaseTextInputStyles: BaseTextInputStyles,
  BaseTextStyles: BaseTextStyles,

  FavoritesStyles: FavoritesStyles,
  NavigationStyles: NavigationStyles,
  ValuesStyles: ValuesStyles,
};
