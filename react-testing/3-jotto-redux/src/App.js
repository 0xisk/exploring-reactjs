import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './redux/reducers/guessedWordsReducer';
import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';
import { getSecretWord } from './redux/actions/index';

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
