import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <p>
        <Link to="/product/1">1번상품</Link>
      </p>
      <p>
        <Link to="/product/2">2번상품</Link>
      </p>
    </div>
  );
};

export default Main;
