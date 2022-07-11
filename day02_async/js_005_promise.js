/*
프라미스 API
Promise 클래스에는 5가지 정적 메서드가 존재한다. 

이 중에서 Promise.all을 실무에서 가장 많이 사용한다고 한다.

Promise.all(promises)
- 모든 프라미스가 이행될 때까지 기다렸다가 그 결괏값을 담은 배열을 반환하는데, 
주어진 프라미스 중에 하나라도 실패하면 Promise.all는 거부되며, 
나머지 프라미스도 무시된다.

Promise.allSettled(promises)
- 모든 프라미스가 처리될 때까지 기다렸다가 그 결과를 담은 배열을 반환한다.

- status는 fullfilled / rejected
- value / 실패한 reason 

Promise.race(promises)
- 가장 먼저 처리된 프라미스의 결과 또는 에러를 담은 프라미스 반환함 

Promise.resolve(value)
- 주어진 값을 사용해 이행 상태 프라미스 만듦
 

Promise.reject(error)
- 주어진 에러를 사용해 거부 상태 프라미스 만듦

Promise의 3가지 상태(states)
1. Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
2. Fulfilled(이행) : 비동기 처리 로직이 완료되어 프로미스가 결과값을 반환해준 상태
3. Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
*/

/////////////////////////////////////////
// Promise 생산자
////////////////////////////////////////
let stage1 = new Promise(function (resolve, reject) {
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

let stage2 = new Promise(function (resolve, reject) {
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

let stage3 = new Promise(function (resolve, reject) {
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

let stage4 = new Promise(function (resolve, reject) {
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

///////////////////////////////////
//Promise 소비자
//////////////////////////////
stage1
  .then(function (resolve) {
    console.log(resolve);
    return stage2;
  })
  .then(function (resolve) {
    console.log(resolve);
    return stage3;
  })
  .then(function (resolve) {
    console.log(resolve);
    return stage4;
  })
  .then(function (resolve) {
    console.log(resolve);
  })
  .catch(function (reject) {
    console.log(reject);
  });
