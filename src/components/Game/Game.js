import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import PreviousGuesses from '../PreviousGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  return <>
  <PreviousGuesses items={previousGuesses} answer={answer}/>
  <GuessInput onNewItemSubmit={(item) => {
    setPreviousGuesses([...previousGuesses, item])
    }} />
  </>;
}

export default Game;
