import { Box, Button, TextField } from "@mui/material"
import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { useTheme } from "../../Context/ThemeContext"
import { auth } from "../../firebaseConfig"
import "./SignUpForm.css"
import { toast } from "react-toastify"
import { errorMapping } from "../../Utils/ErrorMapping"
const SignUpForm = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const themee = useTheme()
  const theme = themee.theme
  const handleSubmit = (e) => {
    if (!email || !password || !confirmPassword) {
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
    } else if (password !== confirmPassword) {
      toast.warn("Both Passwords do not match", {
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
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          toast.success("User Account Created", {
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
  }
  return (
    <Box p={4} className={"SignUpFormRoot"}>
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
      <TextField
        value={confirmPassword}
        onChange={(e) => {
          setconfirmPassword(e.target.value)
        }}
        variant={"outlined"}
        type={"password"}
        label={"Enter Confirm Password"}
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
        style={{
          backgroundColor: theme.text,
          color: theme.background,
        }}
        variant={"contained"}
        size={"large"}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  )
}

export default SignUpForm
