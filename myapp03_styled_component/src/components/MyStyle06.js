import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: white;
  background-color: orange;
  border: 2px solid black;
`;

const StyledFont = styled(StyledDiv)`
  font-size: 20px;
`;

const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};

const ReactStyle = styled(ReactButton)`
  font-size: 30px;
`;

const MyStyle06 = () => {
  return (
    <div>
      <StyledDiv> StyledDiv</StyledDiv>
      <StyledFont> StyledFont</StyledFont>
      <ReactButton>ReactButton</ReactButton>
      <ReactStyle>ReactStyle</ReactStyle>
    </div>
  );
};

export default MyStyle06;
