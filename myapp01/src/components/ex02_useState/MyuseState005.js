//rsc

import React, { useState } from "react";

const MyuseState005 = () => {
  const [customerList, setCustomerList] = useState([
    {
      name: "고수",
      address: "서울시 강남구",
      phone: "010-0000-0000",
    },
    {
      name: "이영희",
      address: "서울시 서초구",
      phone: "010-0000-0001",
    },
  ]);

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleName = (e) => {
    //console.log(e.target.value);
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleAddress = (e) => {
    // console.log(e.target.value);
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };

  const handlePhone = (e) => {
    //console.log(e.target.value);
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };

  const handleCommit = (e) => {
    console.log(customer.name);
    console.log(customer.address);
    console.log(customer.phone);
    //추가
    setCustomerList((prevState) => {
      return [customer, ...prevState];
    });

    //input 초기화
    setCustomer(() => {
      return { name: "", address: "", phone: "" };
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type="text" onChange={handleName} value={customer.name} />
      </p>
      <p>
        <span>주소</span>
        <input type="text" onChange={handleAddress} value={customer.address} />
      </p>

      <p>
        <span>전화</span>
        <input type="text" onChange={handlePhone} value={customer.phone} />
      </p>

      <button onClick={handleCommit}>확인</button>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전화</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((element, idx) => {
            return (
              <tr key={idx}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyuseState005;
