import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const ToEdit = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { email, password, passwordConfirm } = state;

  useEffect(() => {
    setState({ ...state, email: auth.email });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("비밀번호를 확인하세요");
      setState({ ...state, password: "", passwordConfirm: "" });
      return;
    }

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    await axios
      .put(
        "http://localhost:9000/member/toedit",
        JSON.stringify({ email, password }),
        config
      )
      .then((res) => {
        console.log(res.data);
        alert("회원수정 되었습니다.");
        navigate("/");
      })
      .catch((error) => console.log(error.response));
  };

  return (
    <div>
      <h2>회원 정보 수정</h2>
      <div>
        <label htmlFor="email">ID:</label>
        <input type="text" name="email" id="email" defaultValue={state.email} />
      </div>

      <div>
        <label htmlFor="password">PW:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">PW Confirm:</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          value={state.passwordConfirm}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit" onClick={onSubmit}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default ToEdit;
