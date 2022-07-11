import React from "react";

const Myprops03 = ({ name = "아무개", age = 10, loc = "부산" }) => {
  return (
    <div>
      <p>
        고객님 이름:{name} 나이:{age} 지역:{loc}입니다.
      </p>
    </div>
  );
};

export default Myprops03;
