import React, { Component } from 'react'

var timer
export default class Timer extends Component {
    
    state = {time : this.props.startTime}
    
    componentDidMount = () => {
        timer = setInterval(this.setTime, 1000);
    }

    setTime = () => {
        var { time } = this.state
        time -= 1
        if(time === 0) {
            clearInterval(timer);
            this.props.timeUp()
        }
        else this.setState({time})
    }

    render() {
        var { time } = this.state
        var min = parseInt(time / 60)
        var sec = time - ( min * 60 )

        var pctTime = (time / this.props.startTime * 100) + "%"

        return (
            <div className="rocky-bg th-b" style={{margin: '10px 0px'}}>
                Time Left: {min + ":" + sec}
                <div className="progress-bar" style={{width: pctTime}}></div>
            </div>
        )
    }
}
