import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Login } from './component/login/login';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import bootstrap from "bootstrap"; 

import { DataBinding } from './component/login/data-binding/data-binding';

import { OneWay } from './component/one-way/one-way';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <Login />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <DataBinding/>
  // </React.StrictMode>
  <React.StrictMode>
    <OneWay/>
  </React.StrictMode>
);