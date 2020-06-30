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
  let wrapper;
  let guessedWords = [
    { guessedWords: 'train', letterMatchCount: 3 },
    { guessedWords: 'agile', letterMatchCount: 1 },
    { guessedWords: 'party', letterMatchCount: 5 }
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });
  test('correct number of guessed words', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});