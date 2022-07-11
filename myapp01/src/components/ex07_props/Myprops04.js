import React from "react";

const Myprops04 = (props) => {
  const { name, age, loc } = props;
  const style = {
    border: "1px solid black",
    color: "blue",
    fontSize: "40px",
  };

  return (
    <div style={style}>
      <p>안녕하세요, 제 이름은 {name}입니다.</p>
      <p>나이는 {age}세 입니다. </p>
      <p>사는 곳은 {loc}입니다.</p>
    </div>
  );
};

export default Myprops04;
