import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { combineReducers, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { mainReducer } from './services/reducers/reducer';

const rootReducer = combineReducers({
  cards: mainReducer
})
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

