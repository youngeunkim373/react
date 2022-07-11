import React, { useMemo, useState } from "react";

// 컴포넌트 최적화 => 메모리제이션 => useMemo, useCallback
const MyuseMemo01 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChangee = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    setList(() => {
      return list.concat(parseInt(number));
    });

    setNumber("");
  };

  const getAverage = (listNumbers) => {
    console.log("getAverage");
    if (listNumbers.length == 0) {
      return 0;
    } else {
      const sum = listNumbers.reduce((add, a) => add + a);
      return sum / listNumbers.length;
    }
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChangee} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값:</b>
        {/* <b>{getAverage(list)}</b> */}

        <span>{avg}</span>
      </div>
    </div>
  );
};

export default MyuseMemo01;
