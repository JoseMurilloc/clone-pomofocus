import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StylesGlobal from './styles/global';
import {Routes} from './routes';
import { ResponsiveScalesLayout } from './styles/responsiveScalesLayout';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <StylesGlobal />
        <ResponsiveScalesLayout />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
