import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, checkProps } from '../../utils/testUtils';
import GussedWords from './GussedWords';

const defaultProps = {
  gussedWords: [{
    gussedWords: 'train',
    letterMatchCount: 3
  }]
};

/**
 * Factory function to create a shallowWrapper for the GussedWords component. 
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper} 
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GussedWords {...setupProps} />);
}

test('does not throw warning with default props', () => {
  checkProps(GussedWords, defaultProps);
});

describe('if there are words gussed', () => {
  test('renders without no errors', () => {
    const wrapper = setup({ gussedWords: [] });
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {

  });
});

describe('if there are no words gussed', () => {

});