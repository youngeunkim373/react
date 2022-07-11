//asynchronous

//콜백함수를 여러개 중첩해서 비동기 처리의 실행순서 제어
console.log("====콜백함수를 여러개 중첩해서 비동기 처리의 실행순서 제어===");

function product(callback) {
  setTimeout(callback, 1000);
}

product(() => {
  console.log("start");
  console.log("1. 상품선택");
  product(() => {
    console.log("2. 상품결재");
    product(() => {
      console.log("3. 상품배송");
      product(() => {
        console.log("4. 상품도착");
        console.log("end");
      });
    });
  });
});

/*
1. 콜백 함수를 여러개 중첩하면 작업 내용을 이해하기가 어려워진다.
   이를 가르켜 콜백지옥(callback hell)이라 한다.
2. 콜백 지옥 문제를 해결하고 비동기 처리도 간결하게 작성할 수 있는
   Promise(ES6)를 제공한다.
*/
