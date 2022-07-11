import React from "react";
import styled from "styled-components";

const MyStyle10 = () => {
  const Thing = styled.div`
    color: blue;
    &:hover {
      color: red;
    }

    & ~ & {
      background-color: tomato;
    }

    & + & {
      background-color: aqua;
    }

    &.something {
      background-color: orange;
    }

    .something-else & {
      border: 2px solid black;
    }
  `;

  return (
    <div>
      <Thing>Hello world!</Thing>
      <Thing>안녕</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>좋은밤</div>
      <Thing>여수의 밤</Thing>
      <div className="something-else">
        <Thing>End</Thing>
      </div>
    </div>
  );
};

export default MyStyle10;
