import React from 'react';
import { View } from 'react-native';

/** @Assets */
import { CommonStyles } from 'styles';
import { getSolutionsByOptions, getSolutionsWithOptions } from 'configurations';
/** */

/** @Components */
import { 
  BaseActionSheet,
  BaseScreen,
  BaseSpace,
} from 'components';
/** */

import { useAppSelector } from '../../../app/hooks';

function Solutions(){

  /** @Variables */
  const language = useAppSelector(({ language }) => language.value);
  const solutionsByOptions = getSolutionsByOptions(language);
  const solutionsWithOptions = getSolutionsWithOptions(language);
  /** */

  return (
    <BaseScreen>
      <View style={CommonStyles.flexDirectionRowSpaceBetween}>
        <View style={CommonStyles.flexOne}>
          <BaseActionSheet
            options={solutionsByOptions}
            initialOptionIndex={-1}
            message={`${language.solutions.solutions} ${language.general.by}:`}
            />
        </View>
      </View>
    </BaseScreen>
  )
}

export default Solutions;