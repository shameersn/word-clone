import React from "react";
import { range } from "../utils";
import {NUM_OF_GUESSES_ALLOWED} from '../constants'
import Guess from "./Guess/Guess";
const array = range(NUM_OF_GUESSES_ALLOWED);

export default function PreviousGuesses({ items, answer }) {
  console.log(items)
  return (
    <div className="guess-results">
      {array?.map((item, index) => <Guess answer={answer} key={index} text={items[index] || ''} />)}
    </div>
  );
}
