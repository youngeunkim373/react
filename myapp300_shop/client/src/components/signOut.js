import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const SignOut = () => {
  let { setAuth } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleClick = (e) => {
    setAuth({ success: false });

    navigate("/");
  };
  return <button onClick={handleClick}>SignOut</button>;
};

export default SignOut;
