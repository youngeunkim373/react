import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components3/Dashboard";
import Home from "./components3/Home";
import NoMatch from "./components3/NoMatch";
import About from "./components3/About";
import Layout from "./components3/Layout";
import Product from "./components3/Product";
import Main from "./components3/Main";

const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="main" element={<Main />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
