import React from "react"
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"
import "./Graph.css"
import { useTheme } from "../../Context/ThemeContext"

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Graph = ({ graphData }) => {
  const { theme } = useTheme()
  return (
    <>
      <Line
        data={{
          labels: graphData.map((i) => i[0]),
          datasets: [
            {
              data: graphData.map((i) => i[1]),
              label: "WPM",
              borderColor: theme.text,
            },
          ],
        }}
      />
    </>
  )
}

export default Graph
