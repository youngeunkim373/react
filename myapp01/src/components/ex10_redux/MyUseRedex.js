import React from "react";
import { store } from "../../reduxs/store";
import Left1 from "./Left1";
import "./MyUseRedex.css";
import Right1 from "./Right1";

// npm install redux react-redux
//Provider : store 설정
//useDispatch : dispatch호출해주면 reducer가 실행됨
//useSelector : store에 저장된 state을 사용할때 호출

import { Provider } from "react-redux";
// npm install redux react-redux
const MyUseRedex = () => {
  return (
    <div id="page">
      <h1>Page</h1>
      <div className="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
};

export default MyUseRedex;
