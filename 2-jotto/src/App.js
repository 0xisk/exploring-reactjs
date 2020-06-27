import React from 'react';

import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GussedWords/GussedWords';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWords: 'train', letterMatchCount: 3 }
        ]}/>
      </div>
    );
  }
}

export default App;
