import React from 'react';
import AppRoutes from '@routes/index';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Compose from './ComposeProvider';
import { isBrowser } from '@utils/constant';

const App = () => (
  <Compose components={[[isBrowser ? BrowserRouter : HashRouter]]}>
    <AppRoutes />
    {/* {isDev && <ReactQueryDevtools />} */}
  </Compose>
);

export default App;
