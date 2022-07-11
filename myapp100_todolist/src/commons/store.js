// 리덕스 개발자 도구
//npm install redux-devtools-extension

import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from "redux"; //npm install redux react-redux
import { reducer } from "./reducer";

export const store = createStore(reducer, composeWithDevTools());
