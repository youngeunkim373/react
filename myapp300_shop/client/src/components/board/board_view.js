import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardView = () => {
  const navigate = useNavigate();

  let { id } = useParams();
  //console.log(`id=>${id}`);
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    writer: "",
    contents: "",
    fileName: "",
  });

  const { title, writer, contents, fileName } = inputs; //비구조화 할당을 통해 값 추출

  const onTextChange = (e) => {
    const { value, name } = e.target;
    console.log(`${value}  => ${name}`);
    //...inputs => 기존의 inputs 객체를 복사한 뒤
    // [name]:value => name키의 값을 value로 설정
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    //formData.append("id", inputs.id);
    formData.append("title", inputs.title);
    formData.append("writer", inputs.writer);
    formData.append("contents", inputs.contents);
    console.log(document.myform.fileName.files);
    if (document.myform.fileName.files.length !== 0)
      formData.append("fileName", document.myform.fileName.files[0]);

    await axios
      .put(`http://localhost:9000/board/update/${id}`, formData)
      .then((res) => {
        navigate("/board");
      });
  };

  //useEffect의 콜백함수 자체에 async을 사용할 수 없다.
  //useEffect(async()=>{})
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:9000/board/update/${id}`)
        .then((res) => {
          console.log(res.data); //F12 눌러서 확인하기
          console.log("FILENAME: " + res.data.FILENAME);
          setInputs({
            id: id,
            title: res.data.TITLE,
            writer: res.data.WRITER,
            contents: res.data.CONTENTS,
            fileName: res.data.FILENAME,
          });
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      <form name="myform" onSubmit={onSubmit}>
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
            onChange={onTextChange}
          />
          <span>{fileName}</span>
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

export default BoardView;

//front-end => back-end ( req.body, req.file,  req.params)
//front-end (nagivate) : useParams( )
