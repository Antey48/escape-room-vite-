import React from 'react';
import ReactDOM from 'react-dom/client';
import { TIMEOUT_SHOW_ERROR } from './constants';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastContainer position="top-center" autoClose={TIMEOUT_SHOW_ERROR} theme="colored" />
    <App />
  </React.StrictMode>
);
