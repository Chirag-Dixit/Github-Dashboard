import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        justifyContent: "space-between",
        padding: "10px",
        height: "30px",
        borderBottom: '2px solid gainsboro'
      }}
    >
      <GitHubIcon
        sx={{
          height: "35px",
          width: "35px",
        }}
      />
      <Stack direction="row" alignItems="center" spacing={2} padding={1} >
        {/* <TextField label="Search" variant="outlined" size="small"/> */}
        <Button variant="text">Sign In</Button>
        <Button variant="outlined" size="small">
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
