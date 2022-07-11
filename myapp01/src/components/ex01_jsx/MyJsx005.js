function MyJsx005() {
  const name = "react";
  const age = undefined;
  function process() {
    return age;
  }
  console.log(process());

  //렌더링하면 아무것도 출력이 안된다.
  return (
    <div>
      <p>{name == "REACT" ? name : null}</p>
      <p>{age}</p>
      <p>{/* 주석 처리*/}comment</p>
      /* current page */ // 한 라인 처리
    </div>
  );
}

export default MyJsx005;
