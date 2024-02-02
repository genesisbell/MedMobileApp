import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';

//Redux
import { Provider } from 'react-redux';
import store from './src/app/store';

import AppFirsLoad from './src/AppFirstLoad';

export default function App() {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <AppFirsLoad />
      </Provider>
    </RootSiblingParent>
  );
}
