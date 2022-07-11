import React, { useEffect, useState } from "react";
/*
useEffect: 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다.
특정작업(side effect) : Time(setTimeout), Ajax
useEffect :Effect는 side effect라는 뜻이다.
useEffect 4가지 종류
 1. useEffect(callback); 마운트 후, 리렌더링
 2. useEffect(callback,[]); 마운트후
 3. useEffect(callback,[state]); 마운트후 , state
 4. useEffect(callback(){      마운트 후, 언마운트 전
      return();
     },[])

*/
const MyuseEffect004 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const onChangeName = function (e) {
    setName(e.target.value);
  };

  const onChangeNickname = function (e) {
    setNickname(e.target.value);
  };

  //최초 마운팅 후, 업데이트때 마다, 언마운팅 발생 전
  useEffect(() => {
    console.log("렌더링이 되었습니다.");
    console.log({ name, nickname });
    return () => {
      console.log("cleanup");
    };
  });

  console.log("end");

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickname}
      </div>
    </div>
  );
};

export default MyuseEffect004;
