/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as countActionCreator from '../action-creators/counter';

const Popup = ({ counter, countActions }) => {
  const openGithub = () => {
    browser.tabs.create({
      active: true,
      url: 'https://github.com/shopback/react-webextension-boilerplate'
    });
  };

  const increaseCounter = () => {
    countActions.add();
  };

  return (
    <div className="Popup">
      <h1>This is a simple popup for demo</h1>
      <button onClick={ increaseCounter }>Click to increase the counter</button>: { counter }<br />
      <button onClick={ openGithub }>
        Click to see more about <code>react-webextension-boilerplate</code>
      </button>
    </div>
  );
};

Popup.propTypes = {
  counter: PropTypes.number,
  countActions: PropTypes.object
};

Popup.defaultProps = {
  counter: -1,
  countActions: {}
};

export default connect(
  state => ({ counter: state.counter }),
  dispatch => ({ countActions: bindActionCreators(countActionCreator, dispatch) })
)(Popup);
