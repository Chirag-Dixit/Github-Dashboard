import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Left from "./Left";
import { setUrl } from "../../redux/repos_url/action";
import { setName } from '../../redux/userRepo/action'
import { connect } from "react-redux";

const User = (props) => {
  const accessToken = "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";
  const { values, setUrl, setName } = props;
  const { login, url } = values;
  const [repoCount, setRepoCount] = useState(0);
  const [dataArr, setDataArr] = useState([])

  const getRepoCount = async () => {
    const response = await fetch(url, {
      headers: { Authorization: `token ${accessToken}` },
    });
    const data = await response.json();
    setDataArr(data)
    // console.log(dataArr);
    setRepoCount(data.public_repos);
  };  
  getRepoCount();
  const handleClick = () => {
    setUrl(dataArr.repos_url)
    setName(dataArr.login)
  }

  return (
    <Stack
      border="1px solid gainsboro"
      padding={1}
      direction="row"
      // spacing={20}
      justifyContent="space-between"
      textAlign="left"
      width='fitContent'
    >
      <Link to={`/users/${login}`} onClick={handleClick}>{login}</Link>
      <Stack
        direction="row"
        // spacing={2}
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

const mapStateToProps = state => {
  return{
    url: state.url.url
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setUrl: (data) => dispatch(setUrl(data)),
    setName: (data) => dispatch(setName(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
