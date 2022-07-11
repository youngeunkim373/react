import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  border: 1px solid black;
`;

const SignIn = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    let data = { email: state.email, password: state.password };

    await axios
      .post("http://localhost:9000/member/signin", JSON.stringify(data), config)
      .then((res) => {
        console.log(res.data);
        if (parseInt(res.data) >= 1) {
          setSuccess(true);

          setAuth({
            email: state.email,
            passwword: state.password,
            success: true,
          });
          alert("로그인 성공");

          navigate("/");
        } else {
          setSuccess(false);
          alert("로그인 실패");
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          name="email"
          id="email"
          value={state.email}
          placeholder="이메일"
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          value={state.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
