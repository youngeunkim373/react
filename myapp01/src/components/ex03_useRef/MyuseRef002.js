import React, { useEffect, useRef } from "react";

//useRef() : DOM 접근
const MyuseRef002 = () => {
  //DOM에 접근하기 위해서
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  });

  const handleBtn = () => {
    //let fname = document.querySelector("#fname");
    //console.log(fname.value);
    console.log(nameRef.current.value + "고객님 안녕하세요.");
    nameRef.current.value = "";
  };

  return (
    <div>
      {/* <input type="text" placeholder="이름입력" id="fname" /> */}

      <input type="text" placeholder="이름입력" ref={nameRef} />

      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
