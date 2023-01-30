import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

// Strictmode disabled due to possible limitations
/*
ReactDOM.render(
  <React.StrictMode/>,
  <App />,
  document.getElementById('root');
);
*/

root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode> 
);