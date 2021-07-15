import React, { Component } from 'react'

export default class GameOverPage extends Component {
    render() {
        var { score, setStore } = this.props
        return (
            <div>
                <div className="gameover">GAME OVER</div>
                <div className="sg-c"><div className="final-score fs-head th-b">Your Score : {score} </div></div>
                <div className="aligner" style={{marginTop: '20px'}}>
                    <div onClick={() => setStore({ pageSelected: 'home' })} className="selection-btn selected-btn aligner glow">Play Again</div>
                </div>
            </div>
        )
    }
}
