import React, { useRef, useState } from "react";
/*
 state : state변경 -> 리렌더링 발생함 -> state 초기화 안됨
 ref :   ref변경 -> 리렌더링 발생 안됨 -> ref 초기화 안됨
 variable : variable변경 -> 리렌더링 발생 안됨 -> variable 초기화 됨

 리렌더링 발생(컴포넌트 업데이트)
 1. state가 바뀔 때
 2. props가 바뀔 때
 3. 부모 컴포넌트가 리렌더링될 때
 4. foreUpdate( )로 강제로 렌더링을 트리거할때

 useRef()
 1. 상태정보
 2. DOM 접근
*/
const MyuseRef001 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  const upCountState = (e) => {
    setCount(count + 1);
  };

  const upCountRef = (e) => {
    console.log((countRef.current = countRef.current + 1));
  };

  const upCountLet = () => {
    console.log((countLet = countLet + 1));
  };

  return (
    <div>
      <p>State:{count}</p>
      <p>Ref:{countRef.current}</p>
      <p>Let:{countLet}</p>
      <button onClick={upCountState}>State</button>
      <button onClick={upCountRef}>Ref</button>
      <button onClick={upCountLet}>Let</button>
    </div>
  );
};

export default MyuseRef001;
