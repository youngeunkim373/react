import React from "react";
import styled from "styled-components";

//props에 따른 조건부 스타일링
const BasicButton = styled.button`
  color: ${function (props) {
    console.log("props", props);
    if (props.primary) {
      return "red";
    } else {
      return "green";
    }
  }};

  background-color: ${function (props) {
    if (props.primary) {
      return "black";
    } else {
      return "white";
    }
  }};
`;

// const BasicButton = styled.button`
//   color: ${(props) => {
//     props.primary ? "red" : "green";
//   }};
//   background-color: ${(props) => {
//     props.primay ? "black" : "white";
//   }};
// `;

const MyStyle07 = () => {
  return (
    <div>
      <BasicButton>Basic</BasicButton>
      <BasicButton primary>Basic</BasicButton>
      <BasicButton primary={false}>Basic</BasicButton>
    </div>
  );
};

export default MyStyle07;
