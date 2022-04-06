import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StylesGlobal from './styles/global';
import {Routes} from './routes';
import { ResponsiveScalesLayout } from './styles/responsiveScalesLayout';

function App() {
  return (
    <BrowserRouter>
      <StylesGlobal />
      <ResponsiveScalesLayout />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
