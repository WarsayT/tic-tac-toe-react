import React from 'react'
import "./scoreBoard.css"

const ScoreBoard = ({score, xPlaying}) => {
    const {xScore, oScore} = score;
    return (
        <div className="score-board">
            <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
        </div>
    )
}

export default ScoreBoard