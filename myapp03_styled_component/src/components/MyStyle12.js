import React from "react";

const MyStyle12 = () => {
  const rotate = keyframes`
      from{
        transform:rotate(0deg);        
      }

      to{
        transform:rotate(360deg);
      }
    `;

  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear inflinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
  `;
  return <Rotate>&lt;💅🏾&gt; </Rotate>;
};

export default MyStyle12;
