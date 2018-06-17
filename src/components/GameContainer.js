import * as React from 'react'
import Game from './Game'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import { wrongGuessCount } from '../lib/game'

class GameContainer extends React.PureComponent {

  state = {}


  componentDidMount() {
    this.props.newGame()
  }

//https://stackoverflow.com/questions/42913734/how-to-pass-down-input-value-during-onsubmit-in-react
  handleSubmit = (e) => {
    if(e) e.preventDefault();
    const [input] = e.target.children
    this.props.makeGuess(input.value)
    input.value = "" //clean the form back
  }

  render() {

    return (

    <div>
    <Game  word = {this.props.game.word} guesses = {this.props.game.guesses}/>
    <br/>
    <form onSubmit = {this.handleSubmit} >
    <input maxLenght="1" placeholder="type only one letter in lower case and click enter" type="text" au/>
    </form>
    <br/>
    <h2>You typed { wrongGuessCount(this.props.game.word, this.props.game.guesses)} wrong letter/s </h2>
    <br/>
    <br/>
    <button onClick={this.props.newGame} class= 'fancybutton'>Give me a new word</button>
    <br/>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(GameContainer)
