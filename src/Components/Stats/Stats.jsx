import React from "react"
import Graph from "../Graph/Graph"
import "./Stats.css"

const Stats = ({ wpm, accuracy, correctCharacters, incorrectCharacters, missedChars, extraChars }) => {
  return (
    <div className="stats-box">
      <div className="left-stats">
        <div className="title">WPM</div>
        <div className="subtitle">{wpm}</div>
        <div className="title">Accuracy</div>
        <div className="subtitle">{accuracy}</div>
        <div className="title">Characters</div>
        <div className="subtitle">
          {correctCharacters}/{incorrectCharacters}/{missedChars}/{extraChars}
        </div>
      </div>
      <div className="right-stats">
        <Graph />
      </div>
    </div>
  )
}

export default Stats
