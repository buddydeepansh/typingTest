import React, { useState } from "react"
import "./SignUpForm.css"
import { Box, Button, TextField } from "@mui/material"
import { useTheme } from "../../Context/ThemeContext"

const SignUpForm = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const themee = useTheme()
  const theme = themee.theme
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
      >
        Sign Up
      </Button>
    </Box>
  )
}

export default SignUpForm
