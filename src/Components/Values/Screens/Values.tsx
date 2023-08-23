import React from 'react';
import { FlatList } from 'react-native';

/** @Assets */
import { values } from 'data';
import { valuesType } from 'types';
/** */

/** @Components */
import { BaseScreen } from 'components';
import ValueComp from '../Components/ValueComp';
/** */

import { useAppSelector } from '../../../app/hooks';


function Values() {
  
  const language = useAppSelector(({language}) => language.value);
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
