import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'
import RightPanel from '../components/RightPanel'

export default class PlayPage extends Component {
  render() {
    var { tileSelected, state, jumbleFn , timeUp } = this.props
    return (
      <div className="d-flex ht-pct-100">
        <div className="w-50 aligner-center">
            <GameGrid state={state} tileSelected={tileSelected} jumbleFn={jumbleFn} />
        </div>
        <RightPanel state={state} timeUp={timeUp} />
      </div>
    )
  }
}
