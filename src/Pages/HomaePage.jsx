import React from "react"
import Header from "../Components/Header/Header"
import TypingBox from "../Components/TypingBox/TypingBox"
import Footer from "../Components/Footer/Footer"

const HomaePage = () => {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <TypingBox />
      <Footer />
    </div>
  )
}

export default HomaePage
