import { useState } from "react";

function MyuseState002() {
  //state : 컴포넌트가 가지는 상태
  //useState()함수에는 초기값을 넣어준다.
  //초기값은 숫자,문자,객체, 배열등 가능하다.

  //const [state, setState] = useState();
  const [cnt, setCnt] = useState(0);
  const [color, setColor] = useState("black");

  const handlerClikCnt = (e) => {
    //cnt = cnt + 1;
    setCnt(cnt + 1);
    console.log(`cnt:${cnt}`);
  };

  const handlerClikColor = (e) => {
    //color = color == "black" ? "white" : "black";
    setColor(() => {
      return color === "black" ? "white" : "black";
    });
    console.log(`color:${color}`);
  };

  return (
    <div>
      <p>
        <span>
          {cnt} <button onClick={handlerClikCnt}>cnt update</button>
        </span>
      </p>

      <p>
        <span>
          {color} <button onClick={handlerClikColor}>color update</button>
        </span>
      </p>
    </div>
  );
}

export default MyuseState002;
