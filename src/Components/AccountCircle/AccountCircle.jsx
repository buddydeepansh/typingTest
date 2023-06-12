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
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"

const AccountCircle = () => {
  const [open, setOpen] = useState(false)
  const [valueTabs, setValueTabs] = useState(0)
  const { theme } = useTheme()
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleTabChange = (e, v) => {
    // console.log(e, v)
    setValueTabs(v)
  }
  const handleGoogleSign = async (e) => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
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
      setOpen(false)
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
  const logoutUser = async (e) => {
    auth
      .signOut()
      .then(() => {
        toast.success("Logged Out", {
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
        toast.error(errorMapping[error.code] || "Not able to log out", {
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
  return (
    <div>
      <AccountCircleRoundedIcon
        onClick={() => {
          if (user) {
            // navigate to UserPage
            navigate("/user")
          } else {
            setOpen(!open)
          }
        }}
      />
      {user && <ExitToAppRoundedIcon onClick={logoutUser} />}
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
          {valueTabs === 0 && <LoginForm  setOpen={setOpen} />}
          {valueTabs === 1 && <SignUpForm setOpen={setOpen} />}
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
