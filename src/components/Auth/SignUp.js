import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <Stack
      alignItems="center"
      spacing={2}
      padding={2}
      mt={5}
      border="2px solid gainsboro"
      width="fit-Content"
      marginLeft="auto"
      marginRight="auto"
    >
        <Typography variant="h5">Create New User!</Typography>
      <TextField label="Enter First Name" />
      <TextField label="Enter Last Name" />
      <TextField label="Enter Email" />
      <TextField label="Enter Password" />
      <TextField label="Confirm Password" />
      <Button variant="contained">Sign Up!</Button>
    </Stack>
  );
};

export default SignUp;
