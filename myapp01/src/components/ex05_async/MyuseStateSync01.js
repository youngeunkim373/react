import React, { useState } from "react";
//React은 state가 변경이 될때마다 렌더링이 발생한다.
//React 렌더링이 발생되면 배치로 해서 처리한다.
//배치 16ms 단위로 처리한다.
//useState()은 비동기화로 처리한다.

const MyuseStateSync01 = () => {
  const [number, setNumber] = useState(0);

  const handleNumber = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };
  return (
    <div>
      <p>{number}</p>
      <button onClick={handleNumber}>up</button>
    </div>
  );
};

export default MyuseStateSync01;
