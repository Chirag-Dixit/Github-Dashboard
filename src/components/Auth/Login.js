import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Stack
      alignItems="center"
      spacing={2}
      padding={2}
      mt={10}
      border="2px solid gainsboro"
      width="fit-Content"
      marginLeft="auto"
      marginRight="auto"
    >
      <Typography variant="h5">Login in to Existing User</Typography>
      <TextField label="Enter Email" />
      <TextField label="Enter Password" />
      <Button variant="contained">Log In!</Button>
    </Stack>
  );
};

export default Login;
