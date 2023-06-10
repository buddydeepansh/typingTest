import React from "react"
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"
import "./Graph.css"

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Graph = () => {
  return (
    <>
      <Line
        data={{
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets: [
            {
              data: [3, 4, 5, 6, 7, 8, 9, 1, 2],
              label: "graph1",
              borderColor: "red",
            },
            {
              data: [3, 1, 2, 8, 5, 4, 3, 2, 1],
              label: "graph2",
              borderColor: "green",
            },
          ],
        }}
      />
    </>
  )
}

export default Graph
