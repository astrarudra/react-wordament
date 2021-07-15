import React, { Component } from 'react'
import Timer from './Timer'

export default class RightPanel extends Component {
    render() {
        var { score, bonus, wordsFormed, time } = this.props.state;
        var { timeUp } = this.props
        return (
            <div className="w-50 aligner-center">
                <div>
                    <div className="scoreboard rocky-bg">
                        <div className="th-b">SCORE: {score}</div>
                        <Timer startTime={time * 60} timeUp={timeUp} />
                        <div className="th-b">Bonus: x{bonus}</div>
                    </div>
                    <div className="table">
                        <div>
                            <div className="table-head d-flex">
                                <div className="th-a table-col1">WORDS FORMED</div>
                                <div className="th-b">SCORE</div>
                            </div>
                        </div>
                        <div className="table-body">
                            {wordsFormed.map(word => {
                                return (
                                    <div className="d-flex">
                                        <div className="table-col1">{word.word.toUpperCase()}</div>
                                        <div>{word.score}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}