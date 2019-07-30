import React, { Component } from 'react'
import Tile from './Tile'
import { validateSelection } from '../utility'

export default class GameGrid extends Component {
    render() {
        var { alphaMatrix , 
            scoreMatrix , 
            address , 
            correct , 
            error ,
            grid , 
            wordComposed ,
            jumble ,
            mode
        } = this.props.state
        var { tileSelected , jumbleFn } = this.props
        return (
            <div className="grid-wrap">
                <div>SELECTION : <span className="th-b">{wordComposed.toUpperCase()}</span></div>
                {alphaMatrix.map((row, rowNo) => {
                    return (
                    <div className="d-flex">
                    {row.map((tile, colNo) => {
                        var selected = false
                        var possible = mode === "jumparound" ? true : validateSelection(rowNo, colNo, address)
                        address.forEach(rowCol => {
                            if(rowCol[0] === rowNo && rowCol[1] === colNo){
                            selected = true;
                            }
                        })
                        return <Tile tile={tile} 
                            selected={selected}
                            grid={grid}
                            possible={possible}
                            correct={correct} 
                            error={error} 
                            onClick={() => tileSelected(rowNo, colNo)}
                            letter={tile.toUpperCase()}
                            score={scoreMatrix[rowNo][colNo]}
                            />
                        })
                    }
                    </div>
                    )
                })
                }  
                <button className="btn btn-danger btn-sm" onClick={jumble > 0 ? jumbleFn : null} disabled={!(jumble > 0)} style={{float: 'right'}}>
                    Jumble: {jumble + " Left"}
                </button>
            </div>
        )
    }
}