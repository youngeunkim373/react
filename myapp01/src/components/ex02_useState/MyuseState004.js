import { useState } from "react";

function MyuseState004() {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-0000-0000",
  });

  const handleName = (e) => {
    console.log(e.target.value);
    //setCustomer({ name: e.target.value });  //name:'홍길동', address:undefined, phone:undefined
    setCustomer((prevState) => {
      //name: "홍길동",address: "서울시 강남구", phone: "010-0000-0000"
      return { ...prevState, name: e.target.value };
    });
  };

  const handleAddress = (e) => {
    console.log(e.target.value);
    //setCustomer({ address: e.target.value });//name:undefined, address:'서울 서초구', phone:undefined

    setCustomer((prevState) => {
      //name: "홍길동",address: "서울시 서초구", phone: "010-0000-0000"
      return { ...prevState, address: e.target.value };
    });
  };

  const handlePhone = (e) => {
    console.log(e.target.value);
    //setCustomer({ phone: e.target.value });
    setCustomer((prevState) => {
      //name: "홍길동",address: "서울시 서초구", phone: "010-1234-5678"
      return { ...prevState, phone: e.target.value };
    });
  };

  const handleCommit = (e) => {
    console.log(customer.name);
    console.log(customer.address);
    console.log(customer.phone);
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
    </div>
  );
}

export default MyuseState004;
