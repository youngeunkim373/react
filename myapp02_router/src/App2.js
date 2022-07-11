import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components2/About";
import Dashboard from "./components2/Dashboard";
import NoMatch from "./components2/NoMatch";
import Home from "./components2/Home";
import Layout from "./components2/Layout";

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
