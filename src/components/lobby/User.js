import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Left from "./Left";

const User = (props) => {
  const accessToken = "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";
  const { values } = props;
  const { login, url } = values;
  const [repoCount, setRepoCount] = useState(0);

  const getRepoCount = async () => {
    const response = await fetch(url, {
      headers: { Authorization: `token ${accessToken}` },
    });
    const data = await response.json();
    console.log(data.public_repos);
    setRepoCount(data.public_repos);
  };

  getRepoCount();

  return (
    <Stack
      border="1px solid gainsboro"
      padding={1}
      direction="row"
      // spacing={20}
      justifyContent="space-between"
      textAlign="left"
    >
      <Link>{login}</Link>
      <Stack
        direction="row"
        spacing={2}
        // justifyContent="space-between"
        textAlign="left"
        width='22%'
      >
        <Typography textAlign='left'>No of Repositories: </Typography>
        <Typography>{repoCount}</Typography>
      </Stack>
    </Stack>
  );
};

export default User;
