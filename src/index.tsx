import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { App } from './app/App';


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
