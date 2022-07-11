import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components1/About";
import Dashboard from "./components1/Dashboard";
import Home from "./components1/Home";
import Layout from "./components1/Layout";
import NoMatch from "./components1/NoMatch";
/*
  [1] Routes
    1) Route컴포넌트를 감싸주는 부모 컴포넌트이다.
    2) Route가 하나일때도 Routes으로 감싸준다.

  [2] Route
     1) 브라우저 주소창에 경로와 path속성에 값이 같은 경우 해당 컴포넌트가 실행된다.
     2) 제일 첫번째 Route컴포넌트는  path가 루트(/)여야 한다.

*/

const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
