import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";
import RepoNav from "./RepoNav";
import { connect } from "react-redux";

const UserDashboard = (props) => {
  const { url, searchVal } = props
  const accessToken = "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";
  const [dataArr, setDataArr] = useState([])
  const [sVal, setSVal] = useState(searchVal);

  useEffect(()=>{
    const getRepoData = async() => {
      const response = await fetch(url, { headers: { Authorization: `token ${accessToken}` } })
      const data = await response.json();
      setDataArr(data)
    }

    getRepoData()
  })
  console.log(searchVal)
  useEffect(()=>{
    setSVal(searchVal)
  }, [searchVal])

  const repoList = dataArr.map((element, index)=>{
    if(searchVal === ''){
      return <RepoCard values={element} key={index}/>
    }else{
      if(element.name.startsWith(searchVal)){
        return <RepoCard values={element} key={index}/>
      }
    }
  })

  return (
    <Stack direction="row" spacing={3} m={5}>
      <UserCard />
      <Stack direction="column">
        <RepoNav />
        {/* list of repositories */}
        {/* eg repo */}
        {/* <RepoCard /> */}
        {repoList}
      </Stack>
    </Stack>
  );
};

const mapStateToProps = state => {
  return{
    url: state.url.url,
    searchVal: state.search.searchVal
  }
}

export default connect(mapStateToProps, null)(UserDashboard);
