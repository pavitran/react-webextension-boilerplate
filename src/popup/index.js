/* eslint jsx-a11y/no-static-element-interactions: 0 */
import 'chrome-browser-object-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';

const Popup = () => {
  const openGithub = () => {
    browser.tabs.create({
      active: true,
      url: 'https://github.com/shopback/react-webextension-boilerplate'
    });
  };

  return (
    <div className="Popup" onClick={ openGithub }>
      This popup is just an example.<br />
      Click it to see more details about <code>react-webextension-boilerplate</code>
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('app'));
