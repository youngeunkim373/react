import { useState } from "react";

function MyuseState003() {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");

  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleClikName = (e) => {
    //setNames([...names, input]);
    setNames([input, ...names]);
  };

  return (
    <div>
      <input type="text" onChange={handleChangeName} />
      <button onClick={handleClikName}>ADD</button>
      {/* Each child in a list should have a unique "key" prop. */}
      {names.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
    </div>
  );
}

export default MyuseState003;
