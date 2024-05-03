import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './models/store';
import { Provider } from 'react-redux';



let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        {/* <StoreContext.Provider value={store}> */}
        <App />
        {/* </StoreContext.Provider> */}
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree();

store.subscribe(() => {
  renderEntireTree();
});

reportWebVitals();
