import 'chrome-browser-object-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';

import './index.scss';
import Popup from './containers/popup';


const store = new Store({
  portName: 'WEBEXT_APP'
});

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={ store }>
      <Popup />
    </Provider>,
    document.getElementById('app'));
});
