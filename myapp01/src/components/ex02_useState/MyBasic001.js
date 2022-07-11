function MyBasic001() {
  //variabel
  let cnt = 0;
  let color = "black";

  const handlerClikCnt = (e) => {
    cnt = cnt + 1;
    console.log(`cnt:${cnt}`);
  };

  const handlerClikColor = (e) => {
    color = color == "black" ? "white" : "black";
    console.log(`color:${color}`);
  };

  return (
    <div>
      <p>
        <span>
          {cnt} <button onClick={handlerClikCnt}>cnt update</button>
        </span>
      </p>

      <p>
        <span>
          {color} <button onClick={handlerClikColor}>color update</button>
        </span>
      </p>
    </div>
  );
}

export default MyBasic001;
