import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./store/ReduxStore.js";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      
       <App/>
      
  </Provider>,
)
