import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const GussedWords = (props) => {
  let contents;
  
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>
        Try to guess the secret word!
      </span>
    );
  }

  return (
    <div data-test="component-guessed-words">
      {contents}
    </div>
  )
};

GussedWords.propTypes = {
  gussedWords: PropTypes.arrayOf(
    PropTypes.shape({
      gussedWords: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GussedWords;