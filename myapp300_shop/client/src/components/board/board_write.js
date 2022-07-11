import React, { useState } from "react";
import axios from "axios"; //npm install axios
import { Navigate, useNavigate } from "react-router-dom";

const BoardWrite = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    writer: "",
    contents: "",
    fileName: "",
  });

  const { title, writer, contents, fileName } = inputs;

  const onTextChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    console.log(value, name);

    // ...inputs : 기존의 inputs 객체를 복사한다.
    // name키를 가진 값을 value로 설정
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var frmData = new FormData();
    frmData.append("title", inputs.title);
    frmData.append("writer", inputs.writer);
    frmData.append("contents", inputs.contents);
    console.log("files[0]:" + document.myform.fileName.files[0]);
    frmData.append(
      "fileName",
      document.myform.fileName.files[0],
      encodeURIComponent(document.myform.fileName.files[0].name)
    );
    let config = { "Content-Type": "multipart/form-data;charset=UTF-8" };

    axios
      .post("http://localhost:9000/board/insert", frmData, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("등록되었습니다.");
      });
    navigate("/board");
  };

  return (
    <div>
      <form
        name="myform"
        onSubmit={onSubmit}
        encType="multipart/form-data"
        method="post"
      >
        <div className="form-group">
          <label>제목: </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={onTextChange}
          />
        </div>

        <div className="form-group">
          <label>이름:</label>
          <input
            type="text"
            className="form-control"
            name="writer"
            value={writer}
            onChange={onTextChange}
          />
        </div>

        <div className="form-group">
          <label>내용:</label>
          <input
            type="text"
            className="form-control"
            name="contents"
            value={contents}
            onChange={onTextChange}
          />
        </div>

        <div className="form-group">
          <label>파일:</label>
          <input
            type="file"
            name="fileName"
            className="form-control"
            value={fileName}
            onChange={onTextChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="등록" className="btn btn-primary" />
        </div>
      </form>

      <div style={{ marginTop: 20 }}>
        <b>값:</b>
        {title} <br />
        {writer}
        <br />
        {contents}
        <br />
        {fileName}
      </div>
    </div>
  );
};

export default BoardWrite;
