import React from "react"
import Graph from "../Graph/Graph"
import "./Stats.css"

const Stats = ({ wpm, accuracy, correctCharacters, incorrectCharacters, missedChars, extraChars, graphData }) => {
  let timeSet = new Set()
  const newGraph = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0])
      return i
    }
  })
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
        <Graph graphData={newGraph} />
      </div>
    </div>
  )
}

export default Stats
