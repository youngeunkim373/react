import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";
import Left1 from "./Left1";
import "./MyuseContext01.css";
import Right1 from "./Right1";

//Context API + useContext( )
const MyuseContext01 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("홍길동");

  const onHandleIncrease = () => {
    setNumber(number + 1);
  };

  const onHandleName = () => {
    setName(name === "홍길동" ? "고수" : "홍길동");
  };

  return (
    <UserContext.Provider value={{ name, setName, onHandleName }}>
      <ThemeContext.Provider value={{ number, setNumber, onHandleIncrease }}>
        <div id="page">
          <h1>Page</h1>
          <div className="grid">
            <Left1 />
            <Right1 />
          </div>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
export default MyuseContext01;
