import React from 'react';

//Redux
import { Provider } from 'react-redux';
import store from './src/app/store';

import AppFirsLoad from './src/AppFirstLoad';

export default function App() {
  return (
    <Provider store={store}>
      <AppFirsLoad />
    </Provider>
  );
}
