import { useEffect } from 'react';
import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from '@pages/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return <App></App>;
}

const container = document.getElementById('main');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<AppWithCallbackAfterRender />);
