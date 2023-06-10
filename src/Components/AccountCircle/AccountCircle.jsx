import React, { useState } from "react"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import "./AccountCircle.css"
import { Modal, Tab, Tabs } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import LoginForm from "../LoginForm/LoginForm"
import SignUpForm from "../SignUpForm/SignUpForm"
import { useTheme } from "../../Context/ThemeContext"
const AccountCircle = () => {
  const [open, setOpen] = useState(false)
  const [valueTabs, setValueTabs] = useState(0)
  const { theme } = useTheme()
  const handleTabChange = (e, v) => {
    // console.log(e, v)
    setValueTabs(v)
  }
  return (
    <div>
      <AccountCircleRoundedIcon
        onClick={() => {
          setOpen(!open)
        }}
      />
      <Modal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        className="AccountModal"
      >
        <div className="modalRoot">
          <AppBar className="modalRootAppBar">
            <Tabs value={valueTabs} onChange={handleTabChange} className="TabsModalPc" variant="fullWidth">
              <Tab label="login" style={{ color: theme.text }}></Tab>
              <Tab label="sign up" style={{ color: theme.text }}></Tab>
            </Tabs>
          </AppBar>
          {valueTabs === 0 && <LoginForm />}
          {valueTabs === 1 && <SignUpForm />}
        </div>
      </Modal>
    </div>
  )
}

export default AccountCircle
