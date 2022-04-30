import React from 'react';

import {Provider} from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';

export const Providers: React.FC = ({children}) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </BrowserRouter>
  );
};
