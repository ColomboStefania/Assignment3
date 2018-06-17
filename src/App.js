import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import GameContainer from './components/GameContainer'
import logo from './logo.svg';

class App extends Component {
render() {
  return (

    <Provider store={store}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hangman in React</h1>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/Hangman" component={GameContainer} />
      </div>
    </Provider>
  );
}
}

export default App;
