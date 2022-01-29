import React from 'react';
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer"
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'

import './index.css';
import App from './App';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

