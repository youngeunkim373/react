/*
  async & await 사용법
  
   async  asyncAPI function(){ }  //일반 함수의 사용법

   async asyncAPI = async() =>{  } //화살표 함수의 사용법
*/

/////////////////////////////////////////
// async ~ await
////////////////////////////////////////
const stage1 = async () => {
  let result = await new Promise(function (resolve, reject) {
    //비동기처리 함수
    setTimeout(function () {
      console.log("1.  상품선택");
      if (true) {
        resolve("1. 상품선택 성공");
      } else {
        reject("1. 상품선택 실패");
      }
    }, 1000);
  });
  console.log(result);
};

const stage2 = async () => {
  let result = await new Promise(function (resolve, reject) {
    //비동기처리 함수
    setTimeout(function () {
      console.log("2.  상품결재");
      if (true) {
        resolve("2. 상품결재 성공");
      } else {
        reject("2. 상품결재 실패");
      }
    }, 1000);
  });
  console.log(result);
};

const stage3 = async () => {
  let result = await new Promise(function (resolve, reject) {
    //비동기처리 함수
    setTimeout(function () {
      console.log("3.  상품배송");
      if (true) {
        resolve("3. 상품배송 성공");
      } else {
        reject("3. 상품배송 실패");
      }
    }, 1000);
  });
  console.log(result);
};

const stage4 = async () => {
  let result = await new Promise(function (resolve, reject) {
    //비동기처리 함수
    setTimeout(function () {
      console.log("4.  상품도착");
      if (true) {
        resolve("4. 상품도착 성공");
      } else {
        reject("4. 상품도착 실패");
      }
    }, 1000);
  });
  console.log(result);
};

stage1();
stage2();
stage3();
stage4();

///////////////////////////////////
//Promise 소비자
//////////////////////////////
// stage1
//   .then(function (resolve) {
//     console.log(resolve);
//     return stage2;
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return stage3;
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return stage4;
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//   })
//   .catch(function (reject) {
//     console.log(reject);
//   });
