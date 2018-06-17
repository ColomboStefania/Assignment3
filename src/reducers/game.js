
export default (state = game, action = {}) => {
switch(action.type){
case 'NEW_GAME':
  return action.payload
  case 'MAKE_GUESS':
    return {
        ...state,
        guesses: [...state.guesses , (action.payload)]
    }
  default:
    return state
  }
}
//I need to convert the game from being a array.Otherwise functions in lib would not work.
//The array might limit the access to the properties(guesses, word), therefore I need to manually convert to a initialstate I called game as the action itself
//guesses need to be in form of array in order to collect the letters
const game = {
  word: '',
  guesses:[]
}
