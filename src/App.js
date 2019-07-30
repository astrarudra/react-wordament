/* 
This is a small scale application and so no flux architecture is used.
App Js is the starting point and the only STATE maintained in the entire application. 
The other state is TIMER so that it does not refresh the whole page.
*/

import React, { Component } from 'react'
import _ from 'lodash'
import allWords from './constants/words.json'

import HomePage from './modules/HomePage'
import PlayPage from './modules/PlayPage'
import GameOverPage from './modules/GameOverPage'

import NavBar from './common/NavBar'
import Footer from './common/footer'
import { getRndInteger, genTiles, validateSelection } from './utility'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSelected: 'home',
      mode: "classic", // modes -> classic,scramble,jumparound
      time: 1,
      grid: 4,
      address: [],
      error: false,
      correct: false,
      jumble: 5,
      bonus: 1,
      wordComposed: "",
      words: [],
      score: 0, // Total score
      wordsFormed: []
    }
  }

  /* This component is parent of all and this function works like action in a flux*/
  setStore = (o) => this.setState(o)

  /* Triggered when time is over */
  timeUp = () => {
    this.setState({ pageSelected: 'gameOver' })
  }

  /* Triggered when user is unable to find word, this creates new tiles randomly */
  jumble = () => {
    var { jumble, grid } = this.state
    var { alphaMatrix, scoreMatrix } = genTiles(grid, grid)
    this.setState({
      jumble: --jumble,
      alphaMatrix,
      scoreMatrix,
      address: [],
      wordComposed: "",
    })
  }

  /* Triggered when play is clicked after selection the options  */
  play = () => {
    var { grid } = this.state
    var { alphaMatrix, scoreMatrix } = genTiles(grid, grid)
    this.setState({
      alphaMatrix,
      scoreMatrix,
      pageSelected: "play",
      jumble: 5,
      bonus: 1,
      wordComposed: "",
      address: [],
      score: 0, // Total score
      wordsFormed: []
    })
  }

  /* This is the heart of the application triggered when a tile is selected */
  tileSelected = (rowNo, colNo) => {
    var { alphaMatrix, scoreMatrix, wordComposed, words = [], address, score, error, correct, bonus, wordsFormed, mode } = this.state

    if (error || correct) return // When a tile is selected at the brief time when they are red or green.
    if (mode !== "jumparound" && !validateSelection(rowNo, colNo, address)) return // check if neighbour tiles are selected.

    wordComposed += alphaMatrix[rowNo][colNo] //letter is added to compose the word
    address.push([rowNo, colNo]) // address of the letter is saved
    var stateObj = { address, wordComposed }

    if (wordComposed.length === 1) stateObj.words = allWords[wordComposed] // pick words from indexed file when single letter is clicked
    else if (wordComposed.length >= 3) { // word check begins
      var filteredWords = words.filter(word => { // filter words that don't match composed word pattern
        if (word.length < wordComposed.length) return false // to optimize the filter filter
        for (var letter in wordComposed) {
          if (word[letter] !== wordComposed[letter]) return false
        }
        return true
      })

      if (filteredWords.length === 0) { // Bad combination -> Reset
        stateObj.error = true
        var futureObj = {
          address: [],
          wordComposed: "",
          words: [],
          bonus: 1,
          error: false
        }
        setTimeout(() => { this.setState(futureObj) }, 500);
      }
      else {
        for (var word in filteredWords) { // Perfect match check
          if (filteredWords[word] === wordComposed) {
            if (_.includes(wordsFormed.map(o => o.word), wordComposed)) break;
            var wordScore = 0;
            alphaMatrix = _.cloneDeep(alphaMatrix) // clone is dont to do away with reference.
            scoreMatrix = _.cloneDeep(scoreMatrix)
            address.forEach(rowCol => {
              wordScore += scoreMatrix[rowCol[0]][rowCol[1]]
              if (mode === "scramble") { // get new tiles
                alphaMatrix[rowCol[0]][rowCol[1]] = String.fromCharCode(getRndInteger(97, 123))
                scoreMatrix[rowCol[0]][rowCol[1]] = getRndInteger(1, 6)
              }
            })
            // score calculation
            wordScore *= bonus
            bonus = bonus + 1
            score = score + wordScore
            stateObj.correct = true
            wordsFormed.unshift({
              word: wordComposed,
              score: wordScore
            })
            var futureObj = {
              score, alphaMatrix, scoreMatrix,
              address: [],
              wordComposed: "",
              words: [],
              correct: false,
              wordsFormed,
              bonus
            }
            setTimeout(() => { this.setState(futureObj) }, 500)
            break;
          }
        }
      }
    }
    this.setState(stateObj)
  }

  render() {
    var { state } = this
    var { pageSelected, score } = state
    /* Map of all the pages */
    var page = {
      home: <HomePage state={state} setStore={this.setStore} play={this.play} />,
      play: <PlayPage state={state} jumbleFn={this.jumble} tileSelected={this.tileSelected} timeUp={this.timeUp} />,
      gameOver: <GameOverPage score={score} setStore={this.setStore} />
    }

    return (
      <div>
        <NavBar setStore={this.setStore} />
        <div className="main">
          {page[pageSelected]}
        </div>
        <Footer />
      </div>
    )
  }
}