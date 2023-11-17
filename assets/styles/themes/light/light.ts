/** @Components_Styles */
import { constants } from './constants';
import { CommonStyles } from '../../CommonStyles';
import { BaseActionSheetStyles } from './components/common/BaseActionSheetStyles';
import { BaseButtonStyles } from './components/common/BaseButtonStyles';
import { BaseErrorsStyles } from './components/common/BaseErrorsStyles';
import { BaseModalStyles } from './components/common/BaseModalStyles';
import { BaseScreenStyles } from './components/common/BaseScreenStyles';
import { BaseTextInputStyles } from './components/common/BaseTextInputStyles';
import { BaseTextStyles } from './components/common/BaseTextStyles';
import { CPRStyles } from './components/CPRStyles';
import { FavoritesStyles } from './components/FavoritesStyles';
import { NavigationStyles } from './components/NavigationStyles';
import { ValuesStyles } from './components/ValuesStyles';
/** */

export const lightTheme = {
  ...CommonStyles,

  ...constants,

  BaseActionSheetStyles: BaseActionSheetStyles,
  BaseButtonStyles: BaseButtonStyles,
  BaseErrorsStyles: BaseErrorsStyles,
  BaseModalStyles: BaseModalStyles,
  BaseScreenStyles: BaseScreenStyles,
  BaseTextInputStyles: BaseTextInputStyles,
  BaseTextStyles: BaseTextStyles,

  CPRStyles: CPRStyles,
  FavoritesStyles: FavoritesStyles,
  NavigationStyles: NavigationStyles,
  ValuesStyles: ValuesStyles,
};
