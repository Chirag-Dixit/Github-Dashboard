import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { setSearchUsers } from "../../redux/SearchUsers/actions";
import { connect } from "react-redux";
import Loading from "../Loading";

const Left = (props) => {
  const accessToken = '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'
  const { setSearchUsers } = props;
  const [input, setInput] = useState("");
  // const [val, setVal] = useState("");
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setDataArr(await searchUsers(input))
      setTotalPages(Math.ceil(dataArr.total_count / 30));
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (input !== "") {
      handleSearch();
    }
  }, [currentPage]);

  useEffect(()=>{
    setSearchUsers(dataArr);
  }, [dataArr, currentPage])

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const searchUsers = async (query) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}&per_page=30&page=${currentPage}`,
      { headers: { Authorization: `token ${accessToken}` } }
    );
    const data = await response.json();
    return data;
  };

  return (
    <Stack
      direction="column"
      border="2px solid black"
      className="left"
      padding={2}
    >
      <TextField
        label="Search for Repositories or Users"
        variant="outlined"
        size="small"
        value={input}
        onChange={handleChange}
      />
      {loading ? <Loading /> : ":)"}
      <Button onClick={handleSearch}>Search</Button>
      <Stack direction="column">
        <Typography variant="subtitle1">Recent Search</Typography>
        <Typography variant="subtitle1">Recent Search</Typography>
        <Typography variant="subtitle1">Recent Search</Typography>
        <Typography variant="subtitle1">Recent Search</Typography>
      </Stack>

      <Stack direction="row">
        <Button onClick={nextPage}>next</Button>
        <Button onClick={prevPage}>prev</Button>
      </Stack>
    </Stack>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchUsers: (data) => dispatch(setSearchUsers(data)),
  };
};

export default connect(null, mapDispatchToProps)(Left);
