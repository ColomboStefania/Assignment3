import {randomWord} from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

//each game needs to have 2 parameters in order to apply the functions in the lib
export function newGame(word, guesses) {
return {
  type: NEW_GAME,
  payload: {
    word : randomWord(),
    guesses : []
  }
}
}

//this action is only going to make changes on the key : guesses
//guesses will be the input.value of my form
export function makeGuess(guesses) {
  return {
    type: MAKE_GUESS,
    payload:
    guesses
  }
}
