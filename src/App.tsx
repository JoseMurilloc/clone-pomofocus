import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StylesGlobal from './styles/global';
import {Routes} from './routes';

function App() {
  return (
    <BrowserRouter>
      <StylesGlobal />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
