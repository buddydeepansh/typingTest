import React, { useState } from "react"
import "./LoginForm.css"
import { Box, Button, TextField } from "@mui/material"

const LoginForm = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
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

      <Button size={"large"} variant={"contained"}>
        Log In
      </Button>
    </Box>
  )
}

export default LoginForm
