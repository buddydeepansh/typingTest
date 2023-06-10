import React, { useState, useRef, useEffect, useMemo, createRef } from "react"
import "./TypingBox.css"
import UpperMenu from "../UpperMenu/UpperMenu"
import { useTestMode } from "../../Context/TestModeContext"
import { useTheme } from "../../Context/ThemeContext"
import Stats from "../Stats/Stats"

var randomWords = require("random-words")

const TypingBox = () => {
  const inputRef = useRef(null)
  const [wordsArray, setWordsArray] = useState(() => {
    return randomWords(50)
  })
  const [currentWordIndex, setcurrentWordIndex] = useState(0)
  const [currentCharacterIndex, setcurrentCharacterIndex] = useState(0)
  const [testStart, settestStart] = useState(false)
  const [testEnd, settestEnd] = useState(false)
  const [testIntervalID, setintervalID] = useState(null)
  const [correctCharacters, setCorrectCharacters] = useState(0)
  const [incorrectCharacters, setIncorrectCharacters] = useState(0)
  const [missedCharacters, setMissedCharacters] = useState(0)
  const [correctWords, setCorrectWords] = useState(0)
  const [extraCharacters, setExtraCharacters] = useState(0)
  const [graphData, setGraphData] = useState([])

  const { testTime } = useTestMode()
  const [countdown, setcountdown] = useState(testTime)
  const { theme } = useTheme()

  const wordsSpanRef = useMemo(() => {
    return Array(wordsArray.length)
      .fill(0)
      .map((i) => createRef(null))
  }, [wordsArray])

  const handleUserInput = (e) => {
    // console.log(e.key, e.keyCode)
    if (!testStart) {
      startTimer()
      settestStart(true)
    } else {
    }
    const allCurrentChars = wordsSpanRef[currentWordIndex].current.childNodes
    if (e.keyCode === 32) {
      // logic for space

      let correctCharsInWord = wordsSpanRef[currentWordIndex].current.querySelectorAll(".correct")

      if (correctCharsInWord === allCurrentChars.length) {
        setCorrectWords(correctWords + 1)
      }

      if (allCurrentChars.length <= currentCharacterIndex) {
        // remove the cursor from last char of a word
        allCurrentChars[currentCharacterIndex - 1].classList.remove("current-right")
      } else {
        // remove the cursor from middle of the word
        allCurrentChars[currentCharacterIndex].classList.remove("current-right")
        setMissedCharacters(missedCharacters + (allCurrentChars.length - currentCharacterIndex))
      }

      wordsSpanRef[currentWordIndex + 1].current.childNodes[0].classList.add("current")
      setcurrentWordIndex(currentWordIndex + 1)
      setcurrentCharacterIndex(0)
      return
    }

    if (e.keyCode === 8) {
      // case for backspace
      if (currentWordIndex === 0 && currentCharacterIndex === 0) {
        return
      }
      if (currentCharacterIndex !== 0) {
        if (allCurrentChars.length === currentCharacterIndex) {
          if (allCurrentChars[currentCharacterIndex - 1].className.includes("extra")) {
            allCurrentChars[currentCharacterIndex - 1].remove()
            allCurrentChars[currentCharacterIndex - 2].className += "current-right"
          } else {
            allCurrentChars[currentCharacterIndex - 1].className = "current"
          }
          setcurrentCharacterIndex(currentCharacterIndex - 1)
          return
        }
        allCurrentChars[currentCharacterIndex].className = ""
        allCurrentChars[currentCharacterIndex - 1].className = "current"
        setcurrentCharacterIndex(currentCharacterIndex - 1)
      } else if (currentCharacterIndex === 0) {
        setcurrentWordIndex(currentWordIndex - 1)
        allCurrentChars[currentCharacterIndex].classList = "current-right"
      }

      return
    }

    if (currentCharacterIndex === allCurrentChars.length) {
      let newSpan = document.createElement("span")
      newSpan.innerText = e.key
      newSpan.className = "incorrect extra current-right"
      allCurrentChars[currentCharacterIndex - 1].classList.remove("current-right")
      wordsSpanRef[currentWordIndex].current.append(newSpan)
      setcurrentCharacterIndex(currentCharacterIndex + 1)
      setExtraCharacters(extraCharacters + 1)
      return
    }

    if (e.key === allCurrentChars[currentCharacterIndex].innerText) {
      allCurrentChars[currentCharacterIndex].className = "correct"
      setCorrectCharacters(correctCharacters + 1)
    } else {
      allCurrentChars[currentCharacterIndex].className = "incorrect"
      setIncorrectCharacters(incorrectCharacters + 1)
    }

    if (currentCharacterIndex + 1 === allCurrentChars.length) {
      allCurrentChars[currentCharacterIndex].classList.add("current-right")
    } else {
      allCurrentChars[currentCharacterIndex + 1].classList.add("current")
    }
    setcurrentCharacterIndex(currentCharacterIndex + 1)
  }
  const focusInput = (e) => {
    inputRef.current.focus()
  }

  const startTimer = () => {
    const intervalId = setInterval(timer, 1000)
    setintervalID(intervalId)
    function timer() {
      setcountdown((latestCountDown) => {
        setCorrectCharacters((correctCharacters) => {
          setGraphData((graphData) => {
            return [...graphData, [testTime - latestCountDown + 1, correctCharacters / 5 / ((testTime - latestCountDown + 1) / 60)]]
          })
          return correctCharacters
        })
        if (latestCountDown === 1) {
          settestEnd(true)
          clearInterval(intervalId)
          return 0
        }
        return latestCountDown - 1
      })
    }
  }

  const resetWordsClassNameFunction = () => {
    wordsSpanRef.map((i) => {
      Array.from(i.current.childNodes).map((char) => {
        char.className = ""
      })
    })
    wordsSpanRef[0].current.childNodes[0].className = "current"
  }

  const resetTest = () => {
    clearInterval(testIntervalID)
    setcountdown(testTime)
    setcurrentWordIndex(0)
    setcurrentCharacterIndex(0)
    settestStart(false)
    settestEnd(false)
    setWordsArray(randomWords(50))
    resetWordsClassNameFunction()
    focusInput()
  }

  const calculateWPM = () => {
    return Math.round(correctCharacters / 5 / (testTime / 60))
  }
  const calculateAccuracy = () => {
    return Math.round((correctWords / currentWordIndex) * 100)
  }

  useEffect(() => {
    focusInput()
    wordsSpanRef[0].current.childNodes[0].className = "current"
  }, [])

  useEffect(() => {
    resetTest()
  }, [testTime])

  useEffect(() => {
    // console.log("themes", theme);
    const body = document.querySelector("body")
    body.style.backgroundColor = theme.background
    body.style.color = theme.text
    const words = document.querySelector(".words")
    words.style.color = theme.typeBoxText
  }, [theme])

  return (
    <div>
      <UpperMenu countdown={countdown} />
      {testEnd ? (
        <Stats wpm={calculateWPM()} accuracy={calculateAccuracy()} correctCharacters={correctCharacters} incorrectCharacters={incorrectCharacters} missedChars={missedCharacters} extraChars={extraCharacters} graphData={graphData} />
      ) : (
        <>
          <div className="type-box" onClick={focusInput}>
            <div className="words">
              {wordsArray.map((word, index) => {
                return (
                  <span ref={wordsSpanRef[index]} className="word" key={`word${index}`}>
                    {word.split("").map((charr, index) => {
                      return (
                        <span className="char" key={`char${index}`}>
                          {charr}
                        </span>
                      )
                    })}
                  </span>
                )
              })}
            </div>
          </div>
          <input type="text" ref={inputRef} name="" id="" className="hidden-input" onKeyDown={handleUserInput} />
        </>
      )}
    </div>
  )
}

export default TypingBox
