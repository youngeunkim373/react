import React, { useMemo, useCallback, useState, useRef } from "react";

const MyuseCallback01 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    console.log("onChange");
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음렌더링 될 때만 함수 생성

  const onInsert = useCallback(() => {
    setList(() => {
      return list.concat(parseInt(number));
      setNumber("");
      inputEl.current.focus();
    });
  }, [number, list]); //number 혹은 list가 바뀌었을 때 함수 생성

  const getAverage = (listNumbers) => {
    console.log("getAverage");
    if (listNumbers.length === 0) {
      return 0;
    } else {
      const sum = listNumbers.reduce((add, a) => add + a);
      return sum / listNumbers.length;
    }
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
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

export default MyuseCallback01;
