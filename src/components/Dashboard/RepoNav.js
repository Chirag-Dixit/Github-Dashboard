import React, { useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { setSearch } from "../../redux";
import { connect } from "react-redux";

const RepoNav = (props) => {
  const { setSearch } = props
  const [filter, setFilter] = useState("sortBy");
  const [input, setInput] = useState('');
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setInput(event.target.value);
    setSearch(input)
  }

  return (
    <Stack direction="row">
      <TextField label="find a repository..." size="small" onChange={handleSearchChange}/>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        value={filter}
        onChange={handleChange}
        sx={{
          height: "35px",
          width: "fitContent",
          maxWidth: 150,
        }}
      >
        <MenuItem value="sortBy">Sort By</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="star">Stars</MenuItem>
        <MenuItem value="forks">Forks</MenuItem>
        <MenuItem value="openIssues">Open Issues</MenuItem>
      </Select>
    </Stack>
  );
};

const mapDispatchToProps = dispatch =>{
  return{
    setSearch: (data) => dispatch(setSearch(data)),
  }
}

export default connect(null, mapDispatchToProps)(RepoNav);
