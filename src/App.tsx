import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StylesGlobal from './styles/global';
import {Routes} from './routes';
import { Responsive } from './styles/responsive';

function App() {
  return (
    <BrowserRouter>
      <StylesGlobal />
      <Responsive />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
