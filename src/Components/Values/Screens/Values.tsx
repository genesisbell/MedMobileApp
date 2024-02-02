import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

/** @Assets */
import { values } from 'data';
import { valuesType } from 'types';
/** */

/** @Components */
import { BaseScreen } from 'components';
import ValueComp from '../Components/ValueComp';
/** */

import { getLangState } from '../../../app/hooks';
import { RootState } from '../../../app/store';

function Values() {
  
  const language = useSelector((rootState: RootState) => getLangState(rootState).value);
  const data = values(language.name);

  return (
    <BaseScreen isScrollable={false}>
      <FlatList<valuesType>
        data={data}
        renderItem={({item}) => <ValueComp item={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </BaseScreen>
  );
}

export default Values;
