import * as React from 'react'
import {showGuess,wrongGuessLimit,isWinner}  from '../lib/game'
import './Style.css'

export default function Game(props) {
  if (wrongGuessLimit(props.word, props.guesses)) {
    return (
      (<h2>Game Over</h2>)
    )
  }
  else if (isWinner(props.word, props.guesses) ) {
    return (
      <h1>You are the best!</h1>
    )
  }
  else {
    return (
      <div>
        <h1>Start the Game!</h1>
        <h3> { showGuess(props.word, props.guesses) } </h3>
      </div>
    )
  }
}
