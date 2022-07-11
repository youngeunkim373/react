import React from "react";
import FirstSub from "./FirstSub";
import SecondSub from "./SecondSub";
import SuperComponent from "./SuperComponent";

const MyStyle04 = () => {
  return (
    <div>
      <SuperComponent>
        <FirstSub />
        <SecondSub />
      </SuperComponent>
    </div>
  );
};

export default MyStyle04;
