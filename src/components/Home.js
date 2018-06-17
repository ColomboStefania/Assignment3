import * as React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

export default function Home(props) {
  return (
    <div>
    <h1>Welcome to Hangman!</h1>
    <button class = 'fancybutton'>
    <Link to={`/hangman`}>Start the Game!!!</Link>
    </button>
    </div>
  )
}
