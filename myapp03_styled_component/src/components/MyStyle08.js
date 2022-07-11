import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 0, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background-color: aqua;
      border: 2px solid black;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

const MyStyle08 = () => {
  return (
    <div>
      <Button>안녕하세요.</Button>
      <Button inverted={true}>테두리만</Button>
    </div>
  );
};

export default MyStyle08;
