import React, { Component } from 'react';
import { render,hydrate } from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// optional cofiguration
const options = {
  position: 'top right',
  timeout: 5000,
  offset: '30px',
  transition: 'fade',
  zIndex: 9999
};

class Root extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    );
  }
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
