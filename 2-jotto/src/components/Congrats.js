import React from 'react';

/**
 * Functional react component for congratulatory message.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered Comonent (or null if 'success' prop is false).
 */
export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test='congrats-message'>
          Congratulations! You've gussed the correct word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    );
  }
}