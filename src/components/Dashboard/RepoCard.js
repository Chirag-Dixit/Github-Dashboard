import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RepoCard = (props) => {
  const { values } = props
  // console.log(values)
  const { name, description, forks_count, open_issues_count } = values

  return (
    <Stack
      direction="row"
      spacing={5}
      mt={3}
      borderTop="1px solid gainsboro"
      borderBottom="1px solid gainsboro"
      justifyContent='space-between'
      textAlign='left'
      width='80%'
      padding='20px'
    >
      <Stack>
        <Link style={{
          textDecoration: 'none',
        }}>
          <Typography variant="h5">{name}</Typography>
        </Link>
        <Typography>{description}</Typography>
      </Stack>
      <Stack>
        <Typography>Number of Stars</Typography>
        <Typography>Number of Forks: {forks_count}</Typography>
        <Typography>Number of Open Issues: {open_issues_count}</Typography>
      </Stack>
    </Stack>
  );
};

export default RepoCard;
