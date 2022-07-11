import React from "react";
import styled from "styled-components";

//공식문서 : https://styled-components.com/
//npm install styled-components
// styled.태그명`스타일정의 `;

const StyledDiv = styled.div`
  color: white;
  background-color: orange;
  border: 2px solid black;
`;

const MyStyle05 = () => {
  return (
    <div>
      <StyledDiv> styled-components</StyledDiv>
    </div>
  );
};

export default MyStyle05;
