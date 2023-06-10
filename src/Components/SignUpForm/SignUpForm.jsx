import React, { useState } from "react"
import "./SignUpForm.css"
import { Box, Button, TextField } from "@mui/material"

const SignUpForm = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
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
      />
      <TextField
        value={password}
        onChange={(e) => {
          setpassword(e.target.value)
        }}
        variant={"outlined"}
        type={"password"}
        label={"Enter Password"}
      />
      <TextField
        value={confirmPassword}
        onChange={(e) => {
          setconfirmPassword(e.target.value)
        }}
        variant={"outlined"}
        type={"password"}
        label={"Enter Confirm Password"}
      />

      <Button variant={"contained"} size={"large"}>Sign Up</Button>
    </Box>
  )
}

export default SignUpForm
