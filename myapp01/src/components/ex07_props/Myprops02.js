import React from "react";

const Myprops02 = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        고객님 이름:{props.name} 나이:{props.age} 지역:{props.loc}입니다.
      </p>
    </div>
  );
};

Myprops02.defaultProps = {
  name: "아무개",
  age: 10,
  loc: "제주",
};

export default Myprops02;
