import React, { useState } from "react"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import "./AccountCircle.css"
import { Box, Modal, Tab, Tabs } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import LoginForm from "../LoginForm/LoginForm"
import SignUpForm from "../SignUpForm/SignUpForm"
import { useTheme } from "../../Context/ThemeContext"
import GoogleButton from "react-google-button"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../firebaseConfig"
import { errorMapping } from "../../Utils/ErrorMapping"
import { toast } from "react-toastify"

const AccountCircle = () => {
  const [open, setOpen] = useState(false)
  const [valueTabs, setValueTabs] = useState(0)
  const { theme } = useTheme()
  const handleTabChange = (e, v) => {
    // console.log(e, v)
    setValueTabs(v)
  }
  const handleGoogleSign = async (e) => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      toast.success("Google Log In Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      })
    } catch (error) {
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
    }
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
          <Box className={"googleBox"}>
            <span>OR</span>
            <GoogleButton className="googleBTN" onClick={handleGoogleSign} />
          </Box>
        </div>
      </Modal>
    </div>
  )
}

export default AccountCircle
