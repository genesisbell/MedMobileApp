import React from 'react';

/** @Components */
import BaseLangSelection from '../../Common/BaseLangSelection';
import BaseScreen from '../../Common/BaseScreen';
import BaseSpace from '../../Common/BaseSpace';
import BaseThemeSelection from '../../Common/BaseThemeSelection';
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
