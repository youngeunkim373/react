//asynchronous

function one() {
  console.log("1. 상품선택");
}

function two() {
  setTimeout(() => {
    console.log("2. 상품결재");
  }, 1000);
}

function three() {
  setTimeout(() => {
    console.log("3. 상품배송");
  }, 1000);
}

function four() {
  console.log("4. 상품도착");
}

console.log("start");
one();
two();
three();
four();
console.log("end");
