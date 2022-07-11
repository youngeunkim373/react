const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const oracledb = require("oracledb");
const dbConfig = require("./dbconfig.js");
const { executionAsyncId } = require("async_hooks");

const app = express();
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on Port ${port}`));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//app.use(cors({ origin: "*", credentials: "true" }));

//클라리언트에서 withCredentials: true 설정이 되여 있으면
//origin의 값을 명확히 명시 해야한다.
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

let binds = {};
let options = {
  outFormat: oracledb.OUT_FORMAT_OBJECT, //query result format
};

app.get("/board/list/:currentPage", async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);

  //페이징 처리 기법
  let currentPage = 1; //현재 보고 있는 페이지

  //사용자가 링크를 누른경우에는 넘어온 currentPage 값으로 대체해야 한다.
  if (req.params.currentPage != undefined) {
    currentPage = parseInt(req.params.currentPage);
  }

  //전체 레코드 수
  let totalRecord = 0;

  let sql1 = "SELECT count(*) FROM board";
  connection.execute(sql1, function (err, result) {
    if (err) {
      console.log(err.message);
      doRelease(connection);
      return;
    }
    totalRecord = parseInt(result.rows);
    connection.commit();
    doRelease(connection);
  });

  connection = await oracledb.getConnection(dbConfig);
  console.log(`totalRecord : ${totalRecord}`);
  let pageSize = 2; //페이지당 보여줄 레코드 수
  let totalPage = Math.ceil(totalRecord / pageSize); //전체 페이지수
  let blockSize = 2; //한 블럭당 보여줄 페이지 수
  let firstPage = currentPage - ((currentPage - 1) % blockSize); //블럭당 시작 페이지
  let lastPage = firstPage + blockSize - 1; //블럭당 마지막 페이지
  if (totalPage < lastPage) lastPage = totalPage;
  let rnum = totalRecord - (currentPage - 1) * pageSize; //페이지당 시작 게시물 갯수
  let startRow = (currentPage - 1) * pageSize + 1; //시작 레코드
  let endRow = startRow + pageSize - 1; //끝 레코드
  console.log(`startRow: ${startRow},  endRow:${endRow}`);

  //   let sql2 =
  //     `SELECT b.* FROM ` +
  //     `(SELECT a.*, rownum as rm  FROM ` +
  //     `(SELECT * FROM board ORDER BY id DESC)a)b ` +
  //     `WHERE b.rm >=${startRow}  AND b.rm <=${endRow}`;
  let sql2 =
    "SELECT b.* FROM " +
    "(SELECT a.*, rownum as rm  FROM " +
    "(SELECT * FROM board ORDER BY id DESC)a)b " +
    "WHERE b.rm >=:startRow  AND b.rm <=:endRow";
  binds = [startRow, endRow];
  connection.execute(sql2, binds, options, function (err, result) {
    //console.log(result.rows);
    if (err) {
      console.err(err.message);
      doRelease(connection);
      return;
    }

    // console.log(
    //   `boardList: ${result.rows}, totalPage:${totalPage}, currentPage:${currentPage}, firstPage:${firstPage}, lastPage:${lastPage}, totalRecord:${totalRecord}, rnum:${rnum} `
    // );
    res.send({
      boardList: result.rows,
      currentPage: currentPage,
      firstPage: firstPage,
      lastPage: lastPage,
      totalRecord: totalRecord,
      rnum: rnum,
    });
    connection.commit();
    doRelease(connection);
  });
});
/////////////////////////////////////////////////////////////
//데이터 insert
// http://expressjs.com/en/resources/middleware/multer.html
app.use("/fileName/", express.static("./upload"));
const upload = multer({ dest: "./upload" }); //dest: 파일이 저장될 위치
app.post("/board/insert", upload.single("fileName"), async (req, res) => {
  // console.log(`file=> ${req.file.filename}`);
  //console.log(`file=> ${req.file.originalname}`);
  let title = req.body.title;
  let writer = req.body.writer;
  let contents = req.body.contents;
  let fileName = null;
  let originalFileName = null;
  console.log("insert req.file=>");
  console.log(req.file);

  if (req.file !== undefined) {
    fileName = req.file.filename;
    originalFileName = decodeURIComponent(req.file.originalname);
  }

  console.log(
    `${title}  ${writer}  ${contents}  ${fileName} ${originalFileName}`
  );

  let params = [title, writer, contents, fileName];
  let sql =
    "INSERT INTO board(id,title,writer,contents,fileName) " +
    "VALUES(board_id_seq.nextval,:title,:writer,:contents,:fileName)";

  let connection = await oracledb.getConnection(dbConfig);
  connection.execute(sql, params, (err, result) => {
    if (err) {
      console.log(err.message);
      doRelease(connection);
      return;
    }

    res.send(result);
    console.log(result);
    connection.commit();
    doRelease(connection);
  });
});
/////////////////////////////////////////////////////////
//데이터 삭제

app.delete("/board/delete/:id", async (req, res) => {
  let sql = `SELECT fileName FROM board WHERE id=${req.params.id}`;
  let connection = await oracledb.getConnection(dbConfig);
  connection.execute(sql, (err, result) => {
    let path = result.rows[0].toString();
    console.log("path:" + path);
    fs.unlink("./upload/" + path, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
    if (err) {
      console.log(err.message);
      doRelease(connection);
      return;
    }
    connection.commit();
    doRelease(connection);
  });

  let sql2 = `DELETE FROM board WHERE id = ${req.params.id}`;
  connection = await oracledb.getConnection(dbConfig);
  connection.execute(sql2, (err, result) => {
    if (err) {
      console.log(err.message);
      doRelease(connection);
      return;
    }
    res.send(result);
    console.log(result);
    connection.commit();
    doRelease(connection);
  });
});

////////////////////////////////////////////////////////
//데이터 업데이트
app.get("/board/update/:id", async (req, res) => {
  console.log(`id : ${req.params.id}`); //Terminal 에서 확인
  let sql1 = "SELECT * FROM board WHERE id=:id";
  let connection = await oracledb.getConnection(dbConfig);
  connection.execute(
    sql1,
    [parseInt(req.params.id)],
    options,
    (err, result) => {
      if (err) {
        console.log(err.message);
        doRelease(connection);
        return;
      }
      console.log(`result.rows => ${result.rows}`);
      console.log(`result.rows[0].TITLE => ${result.rows[0].TITLE}`);
      res.send(result.rows[0]);
      connection.commit();
      doRelease(connection);
    }
  );
});

//------------------------------------------------------------
app.put("/board/update/:id", upload.single("fileName"), async (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  let writer = req.body.writer;
  let contents = req.body.contents;
  console.log(`update res=>${id}  ${title}  ${writer}  ${contents}`);

  //console.log(`req.file => ${req.file}`);
  console.log(req.file);
  let fileName = null;
  if (req.file !== undefined) fileName = req.file.filename;
  let sql2 = "UPDATE board SET title=:title,writer=:writer,contents=:conents";

  if (req.file !== undefined) sql2 += ",fileName=:fileName";

  sql2 += " WHERE id=:id";

  let connection = await oracledb.getConnection(dbConfig);
  let params = [];
  if (req.file !== undefined)
    params = [title, writer, contents, fileName, parseInt(id)];
  else params = [title, writer, contents, parseInt(id)];

  connection.execute(sql2, params, (err, result) => {
    if (err) {
      console.log(err.message);
      doRelease(connection);
      return;
    }
    res.send(result);
    console.log(`update result=> ${result}`);
    connection.commit();
    doRelease(connection);
  });
});

/////////////////////////////////////////////////////////
function doRelease(connection) {
  connection.release(function (err) {
    if (err) {
      console.error(error.message);
    }
  });
}
//////////////////////////////////////
////////회원가입 / 회원등록///////////
//회원가입
app.post("/member/signup", async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);

  let email = req.body.email;
  let password = req.body.password;
  console.log(`${email}  ${password}`);

  let param = [email, password];
  let sql = "INSERT INTO member(email, password) VALUES(:email, :password)";
  connection.execute(sql, param, (err, result) => {
    if (err) {
      console.log(err.message);
      doRelease(connection);
      return;
    }

    res.send(result.rows);
    connection.commit();
    doRelease(connection);
  });
});

///로그인////////////
app.post("/member/signin", async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);

  let email = req.body.email;
  let password = req.body.password;
  console.log(`${email}  ${password}`);

  let param = [email, password];
  let sql =
    "SELECT count(*) FROM member WHERE email=:email AND password=:password";
  connection.execute(sql, param, (err, result) => {
    if (err) {
      console.log(err.message);
      doRelease(connection);
      return;
    }

    res.send(result.rows);
    connection.commit();
    doRelease(connection);
  });
});

//회원수정하기
app.put("/member/toedit", async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);

  let email = req.body.email;
  let password = req.body.password;
  console.log(`${email}  ${password}`);

  let param = [email, password];
  let sql = "UPDATE member SET password=:password WHERE email=:email";
  connection.execute(sql, param, (err, result) => {
    if (err) {
      console.log(err.message);
      doRelease(connection);
      return;
    }

    res.send(result.rows);
    connection.commit();
    doRelease(connection);
  });
});
