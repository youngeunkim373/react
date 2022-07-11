import logo from "./logo.svg";
import { Routes, Route, NavLink, Outlet, Link } from "react-router-dom";

import "./App.css";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import BoardList from "./components/board/board_list";

import BoardWrite from "./components/board/board_write";
import BoardView from "./components/board/board_view";
import { useContext, useEffect } from "react";
import AuthContext from "./context/AuthProvider";
import SignOut from "./components/signOut";
import ToEdit from "./components/toEdit";
function App() {
  return (
    <div className="container">
      <h1> Basic Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signout" element={<SignOut />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="toedit" element={<ToEdit />} />
          <Route path="board" element={<BoardList />} />
          <Route path="board/write" element={<BoardWrite />} />
          <Route path="/board/view/:id" element={<BoardView />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  const { auth, setAuth } = useContext(AuthContext);
  const { success } = auth;

  const activeStyle = ({ isActive }) => ({
    color: isActive ? "green" : "",
    fontSize: isActive ? "1.2rem" : "",
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink style={activeStyle} className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {success ? (
              <>
                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/signout"
                  >
                    SIGN OUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/toedit"
                  >
                    TO EDIT
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/signin"
                  >
                    SIGN IN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/signup"
                  >
                    SIGN UP
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink style={activeStyle} className="nav-link" to="/board">
                BOARD
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
