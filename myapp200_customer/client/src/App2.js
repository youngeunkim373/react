import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { TableCell } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomerAdd from "./components/CustomerAdd";
import CircularProgress from "@mui/material/CircularProgress";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu"; //npm install @mui/icons-material/Men
import SearchIcon from "@mui/icons-material/Search"; //npm install @mui/icons-material/Search

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

//컴포넌트에서 사용되는 데이터 값의 기억공간 : 상태(state)
function App() {
  const baseUrl = "http://localhost:9000";

  const [customers, setCustomers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    //progress가 테스트를 할때는 geCustomers()을 주석처리한다.
    getCustomers();

    return () => {
      clearInterval(timer);
    };
  }, []);

  async function getCustomers() {
    await axios
      .get(baseUrl + "/api/customers")
      .then((response) => {
        console.log("response: ", response.data);
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleValueChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredComponents = (data) => {
    data = data.filter((c) => {
      console.log("==", c.NAME);
      return c.NAME.indexOf(searchKeyword) > -1;
    });
    return data.map((c) => {
      return (
        <Customer
          key={c.ID}
          id={c.ID}
          image={c.IMAGE}
          name={c.NAME}
          birthday={c.BIRTHDAY}
          gender={c.GENDER}
          email={c.EMAIL}
        />
      );
    });
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              고객관리 시스템
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                name="searchKeyword"
                value={searchKeyword}
                onChange={handleValueChange}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          width: "100%",
          height: "30px",
          justifyContent: "center",
          display: "flex",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <CustomerAdd />
      </div>
      <Paper>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? (
              filteredComponents(customers)
            ) : (
              // {customers ? (
              //   customers.map((c) => {
              //     return (
              //       // Each child in a list should have a unique "key" prop.
              //       <Customer
              //         key={c.ID}
              //         id={c.ID}
              //         image={c.IMAGE}
              //         name={c.NAME}
              //         birthday={c.BIRTHDAY}
              //         gender={c.GENDER}
              //         email={c.EMAIL}
              //       />
              //     );
              //   })
              // )
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress variant="determinate" value={progress} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default App;
