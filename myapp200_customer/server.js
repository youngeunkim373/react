const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors"); //npm install cores
const multer = require("multer");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*", //출처 허용옵션
    credentials: "true", //사용자 인증이 필요한 리소스 (쿠키등...)접근
  })
);

//http://localhost:9000/api/hello
// app.get("/api/hello", (req, res) => {
//   res.send({ message: "Hello Express!!!!" });
// });

//http://localhost:9000/api/customers
// app.get("/api/customers", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       image: "https://placeimg.com/64/64/1",
//       name: "고수",
//       birthday: "780604",
//       gender: "남자",
//       email: "su@gmail.com",
//     },
//     {
//       id: 2,
//       image: "https://placeimg.com/64/64/2",
//       name: "김연아",
//       birthday: "980426",
//       gender: "여자",
//       email: "kim@daum.net",
//     },
//     {
//       id: 3,
//       image: "https://placeimg.com/64/64/3",
//       name: "박태환",
//       birthday: "901206",
//       gender: "남자",
//       email: "park@naver.com",
//     },
//   ]);
// });

// D:\reat_wokspace\source\myapp200_customer> 에서
//npm install oracledb

const oracledb = require("oracledb");
const dbConfig = require("./dbconfig.js");

let binds = {};
let options = {
  outFormat: oracledb.OUT_FORMAT_OBJECT, //query result format
};

app.get("/api/customers", async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);
  let sql = "SELECT * FROM CUSTOMER ORDER BY id DESC";
  connection.execute(sql, binds, options, (err, result) => {
    if (err) {
      console.err(err.message);
      doRelease(connection);
      return;
    }
    res.send(result.rows);
    doRelease(connection);
  });
});
///////////////////////////////////////////
// 데이터 insert
app.use("/image", express.static("./upload"));
//upload.single('image')는 요청받은 파일을 dest위치에 저장함과 동시에
//req객체에 file이라는 속성을 추가하여 관련 정보를 저장하하는 미들웨어이다.
const upload = multer({ dest: "./upload" }); //dest : 파일이 저장될 위치
app.post("/api/customers", upload.single("image"), async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);

  let image = "http://localhost:9000/image/" + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let email = req.body.email;
  console.log(`${image}, ${name}, ${birthday},${gender}, ${email}`);
  let params = [image, name, birthday, gender, email];
  let sql =
    "INSERT INTO customer VALUES(customer_id_seq.nextval, :image, :name, :birthday, :gender, :email)";
  connection.execute(sql, params, (err, result) => {
    if (err) {
      console.error(err.message);
      doRelease(connection);
      return;
    }
    res.send(result);
    console.log("result:" + result);
    console.log("Row Insert:" + result.rowsAffected);
    connection.commit();
    doRelease(connection, result.rowsAffected);
  });
});
///////////////////////////////////////////////////////
//데이터 삭제
app.delete("/api/customers/:id", async (req, res) => {
  console.log("id:", req.params.id);
  let connection = await oracledb.getConnection(dbConfig);

  let sql1 = "SELECT image FROM customer WHERE id=:id";
  connection.execute(sql1, [parseInt(req.params.id)], (err, result) => {
    if (err) {
      console.error(err.message);
      doRelease(connection);
      return;
    }
    let path = result.rows[0].toString();
    path = path.substr(path.lastIndexOf("/") + 1);
    fs.unlink("./upload/" + path, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  });

  let sql2 = "DELETE FROM customer WHERE id=:id";
  connection.execute(sql2, [parseInt(req.params.id)], (err, result) => {
    if (err) {
      console.error(err.message);
      doRelease(connection);
      return;
    }
    res.send(result);
    console.log("result:" + result);
    console.log("Row Insert:" + result.rowsAffected);
    connection.commit();
    doRelease(connection, result.rowsAffected);
  });
});
//////////////////////////////////////////////////////
function doRelease(connection) {
  connection.release(function (err) {
    if (err) {
      console.error(error.message);
    }
  });
}

app.listen(port, () => console.log(`Listening on Port ${port}`));
