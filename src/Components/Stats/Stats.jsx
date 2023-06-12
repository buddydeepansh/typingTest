import { addDoc, collection } from "firebase/firestore"
import React, { useEffect } from "react"
import { toast } from "react-toastify"
import { errorMapping } from "../../Utils/ErrorMapping"
import { auth, db } from "../../firebaseConfig"
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

  const pushDatatoDB = async () => {
    if (isNaN(accuracy)) {
      toast.error("Invalid Test!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      })
      return
    }
    const { uid } = auth.currentUser
    addDoc(collection(db, "Results"), {
      wpn: wpm,
      accuracy: accuracy,
      timeStamp: new Date(),
      characters: `${correctCharacters} / ${incorrectCharacters} / ${missedChars} / ${extraChars}`,
      userId: uid,
    })
      .then(() => {
        toast.success("Data saved in DB", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        })
      })
      .catch((error) => {
        toast.error(errorMapping[error.code] || "Some error occured", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        })
      })
  }

  useEffect(() => {
    if (auth.currentUser) {
      pushDatatoDB()
    } else {
      toast.warn("Login / Signup to save results", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      })
    }
  }, [])

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
