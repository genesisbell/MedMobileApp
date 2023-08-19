import React from 'react';
import { FlatList } from 'react-native';

/** @Assets */
import {values} from 'data';
/** */

/** @Components */
import ValueComp from '../Components/ValueComp';
/** */

import { useAppSelector } from '../../../app/hooks';
import { BaseScreen } from 'components';


function Values() {
  
  const language = useAppSelector(({ language }) => language.value);
  const data = values(language.name);

  return (
    <BaseScreen isScrollable={false}>     
      <FlatList<typeof data[0]>
        data={data}
        renderItem={({item}) => <ValueComp item={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </BaseScreen>
  );
}

export default Values;
