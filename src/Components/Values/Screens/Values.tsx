import React from 'react';
import { FlatList } from 'react-native';

/** @Assets */
import {bloodCount} from 'data';
/** */

/** @Components */
import BaseScreen from '../../Common/BaseScreen';
import ValueComp from '../Components/ValueComp';
/** */

import { useAppSelector } from '../../../app/hooks';


function Values() {
  
  const language = useAppSelector(({ language }) => language.value); 
  const data = bloodCount(language.name);

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
