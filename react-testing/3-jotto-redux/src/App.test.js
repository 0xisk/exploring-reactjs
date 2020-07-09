import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from './utils/testUtils';
import App from './App';


/**
 * Factory function to create a ShallowWrapper for the GuessedWord
 * @function setup
 * @param {object} initialState 
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive().dive();

  return wrapper;
}