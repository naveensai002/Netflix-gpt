import React from 'react';

import Body from './components/Body';
import { store } from './utils/appStore';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}
