import React, { useState } from "react"
import "./LoginForm.css"
import { Box, Button, TextField } from "@mui/material"
import { useTheme } from "../../Context/ThemeContext"

const LoginForm = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const themee = useTheme()
  const theme = themee.theme
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
      >
        Log In
      </Button>
    </Box>
  )
}

export default LoginForm
