import React, { Component } from 'react'
import playimg from '../assets/play.png'

export default class HomePage extends Component {

    setMode = (param) => {
        this.props.setStore({ mode: param })
    }
    setTime = (param) => {
        this.props.setStore({ time: param })
    }
    setGrid = (param) => {
        this.props.setStore({ grid: param })
    }

    render() {
        var { state, play } = this.props
        var { mode, time, grid } = state
        var selectedClass = "selection-btn aligner selected-btn"
        var defaultClass = "selection-btn aligner"
        return (
            <div className="text-center">
                <div className="block">
                    {/* MODES */}
                    <div className="header">Modes</div>
                    <div className="content">
                        <div className="d-flex f-center">
                            <div className={mode === "classic" ? selectedClass : defaultClass} onClick={() => this.setMode("classic")}>
                                <div>
                                    <div>Classic</div>
                                    <div className="mode-text">The Original Way It Was Meant To Be Played</div>
                                </div>
                            </div>
                            <div className={mode === "scramble" ? selectedClass : defaultClass} onClick={() => this.setMode("scramble")}>
                                <div>
                                    <div>Scramble</div>
                                    <div className="mode-text">Letters Disapper Once The Word Is Formed</div>
                                </div>
                            </div>
                            <div className={mode === "jumparound" ? selectedClass : defaultClass} onClick={() => this.setMode("jumparound")}>
                                <div>
                                    <div>Jump Around</div>
                                    <div className="mode-text">Chose Any Letter You Wish. No Restrictions!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    {/* TIME */}
                    <div className="header">Time</div>
                    <div className="content">
                        <div className="d-flex f-center">
                            <div className={time === 1 ? selectedClass : defaultClass} onClick={() => this.setTime(1)}>1 min</div>
                            <div className={time === 2 ? selectedClass : defaultClass} onClick={() => this.setTime(2)}>2 min</div>
                            <div className={time === 5 ? selectedClass : defaultClass} onClick={() => this.setTime(5)}>5 min</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    {/* GRID */}
                    <div className="header">Grid</div>
                    <div className="content">
                        <div className="d-flex f-center">
                            <div className={grid === 4 ? selectedClass : defaultClass} onClick={() => this.setGrid(4)}>4 x 4</div>
                            <div className={grid === 5 ? selectedClass : defaultClass} onClick={() => this.setGrid(5)}>5 x 5</div>
                            <div className={grid === 6 ? selectedClass : defaultClass} onClick={() => this.setGrid(6)}>6 x 6</div>
                        </div>
                    </div>
                </div>
                <button onClick={play} className="play">
                    <img src={playimg} height="60" />
                </button>
            </div>
        )
    }
}
