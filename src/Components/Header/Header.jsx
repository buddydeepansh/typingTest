import React from "react"
import "./Header.css"
import AccountCircle from "../AccountCircle/AccountCircle"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="userIcon">
        {/* user icons here */}
        <AccountCircle/>
      </div>
    </div>
  )
}

export default Header
