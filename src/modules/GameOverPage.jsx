import React, { Component } from 'react'
import gameOverImg from "../assets/GameOver.png"

export default class GameOverPage extends Component {
    render() {
        var { score, setStore } = this.props
        return (
            <div>
                <div className="gameover"><img src={gameOverImg} /></div>
                <div className="sg-c"><div className="final-score fs-head th-b">Your Score : {score} </div></div>
                <div className="aligner" style={{marginTop: '20px'}}>
                    <div onClick={() => setStore({ pageSelected: 'home' })} className="selection-btn selected-btn aligner glow">Play Again</div>
                </div>
            </div>
        )
    }
}
