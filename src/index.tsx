import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import Expenses from './screen/Expenses'
import Theme from './Theme';
import Dashboard from './screen/Dashboard';
import { Provider } from "react-redux";
import { getStore } from "./store";
const myStore = getStore();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={myStore}>
      <Theme>
        <Routes>

          <Route path="/" element={<App />} />
          <Route path="verification" element={<Expenses />} />
          <Route path="verification/dashboard" element={<Dashboard />} />

        </Routes>
      </Theme>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
