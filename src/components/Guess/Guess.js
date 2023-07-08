import React from "react";
import { range } from "../../utils";
import {checkGuess} from '../../game-helpers';

const spanArray = range(5);

function Guess({ text, answer }) {
  const processedGuessArray = checkGuess(text, answer);
  return (
    <p className="guess">
      {spanArray.map((item, index) => (
        <span key={index + text} className={`cell ${processedGuessArray ? processedGuessArray[index]?.status : ''}`}>
          {text[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
