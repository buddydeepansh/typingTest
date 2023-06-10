import { Box, Button, TextField } from "@mui/material"
import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { useTheme } from "../../Context/ThemeContext"
import { auth } from "../../firebaseConfig"
import "./SignUpForm.css"

const SignUpForm = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const themee = useTheme()
  const theme = themee.theme
  const handleSubmit = (e) => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill all details!")
      return
    } else if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          alert("user created")
        })
        .catch((error) => {
          alert("Not able to create user")
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
