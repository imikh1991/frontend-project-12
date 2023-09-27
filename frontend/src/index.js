/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import init from './init';
import initSocket from './websocket';
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = initSocket();
const vdom = init(socket);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {vdom}
  </React.StrictMode>,
);
