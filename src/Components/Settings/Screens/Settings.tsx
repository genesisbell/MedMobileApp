import React from 'react';
import { BaseLangSelection, BaseScreen, BaseSpace, BaseThemeSelection } from 'components';

/** @Components */
/** */

function Settings() {
  return (
    <BaseScreen>
      <BaseSpace xbg />
      <BaseThemeSelection />
      <BaseSpace xbg />
      <BaseLangSelection />
    </BaseScreen>
  );
}

export default Settings;
