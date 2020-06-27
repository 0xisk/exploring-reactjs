import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const GussedWords = (props) => {
  return (
    <div />
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