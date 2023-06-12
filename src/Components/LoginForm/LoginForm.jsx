import React, { useState } from "react"
import "./LoginForm.css"
import { Box, Button, TextField } from "@mui/material"
import { useTheme } from "../../Context/ThemeContext"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConfig"
import { toast } from "react-toastify"
import { errorMapping } from "../../Utils/ErrorMapping"

const LoginForm = ({setOpen}) => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const themee = useTheme()
  const theme = themee.theme
  const handleSubmit = (e) => {
    if (!email || !password) {
      toast.warn("Please enter all fields", {
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
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          toast.success("User is Logged In", {
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
  }
  return (
    <Box p={3} className={"LoginFormRoot"}>
      <TextField
        value={email}
        onChange={(e) => {
          setemail(e.target.value)
        }}
        variant={"outlined"}
        type={"email"}
        label={"Enter Email"}
        InputLabelProps={{
          style: {
            color: theme["text"],
          },
        }}
        InputProps={{
          style: {
            color: theme.text,
          },
        }}
      />
      <TextField
        value={password}
        onChange={(e) => {
          setpassword(e.target.value)
        }}
        variant={"outlined"}
        type={"password"}
        label={"Enter Password"}
        InputLabelProps={{
          style: {
            color: theme["text"],
          },
        }}
        InputProps={{
          style: {
            color: theme.text,
          },
        }}
      />

      <Button
        size={"large"}
        variant={"contained"}
        style={{
          backgroundColor: theme.text,
          color: theme.background,
        }}
        onClick={handleSubmit}
      >
        Log In
      </Button>
    </Box>
  )
}

export default LoginForm
