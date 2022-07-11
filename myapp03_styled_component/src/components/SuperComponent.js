import React from "react";

// const SuperComponent = (props) => {
//   const style = {
//     color: "white",
//     backgroundColor: "orange",
//     border: "2px solid black",
//   };

//   return (
//     <div style={style}>
//       {props.children}
//       <button>click</button>
//     </div>
//   );
// };

const SuperComponent = ({ children }) => {
  const style = {
    color: "white",
    backgroundColor: "orange",
    border: "2px solid black",
  };

  return (
    <div style={style}>
      {children}
      <button>click</button>
    </div>
  );
};

export default SuperComponent;
