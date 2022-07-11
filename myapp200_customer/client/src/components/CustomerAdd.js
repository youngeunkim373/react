import axios from "axios";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const styles = {
  hidden: { display: "none" },
};

const CustomerAdd = () => {
  const [input, setInput] = useState({
    file: null,
    userName: "",
    birthday: "",
    gender: "",
    fileName: "",
    email: "",
    open: false,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:9000";
    const url = baseUrl + "/api/customers";
    const formData = new FormData();
    formData.append("image", input.file);
    formData.append("name", input.userName);
    formData.append("birthday", input.birthday);
    formData.append("gender", input.gender);
    formData.append("email", input.email);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });

    setInput({
      file: null,
      userName: "",
      birthday: "",
      gender: "",
      fileName: "",
      email: "",
      open: false,
    });
    window.location.reload();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setInput({ ...input, file: e.target.files[0], fileName: e.target.value });
  }; //////////////////////////////

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInput((prev) => {
      return { ...prev, ...nextState };
    });
  }; ///////////////////////////////

  //모달창 열기
  const handleClickOpen = () => {
    setInput({
      file: null,
      userName: "",
      birthday: "",
      gender: "",
      fileName: "",
      email: "",
      open: true,
    });
  };

  //모달창 닫기
  const handleClose = () => {
    setInput({
      file: null,
      userName: "",
      birthday: "",
      gender: "",
      fileName: "",
      email: "",
      open: false,
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        고객 추가하기
      </Button>

      <Dialog open={input.open} onClose={handleClose}>
        <DialogTitle>고객추가</DialogTitle>
        <DialogContent>
          <input
            style={styles.hidden}
            id="raised-button-file"
            accept="image/*"
            type="file"
            name="file"
            file={input.file}
            value={input.fileName}
            onChange={handleFileChange}
          />

          <label htmlFor="raised-button-file">
            <Button
              variant="cotained"
              color="primary"
              component="span"
              name="file"
            >
              {input.fileName === "" ? "프로필 이미지 선택" : input.fileName}
            </Button>
          </label>
          <br />
          <TextField
            label="이름"
            variant="standard"
            type="text"
            name="userName"
            value={input.userName}
            onChange={handleValueChange}
          />
          <br />
          <TextField
            label="생년월일"
            variant="standard"
            type="text"
            name="birthday"
            value={input.birthday}
            onChange={handleValueChange}
          />
          <br />
          <TextField
            label="성별"
            variant="standard"
            type="text"
            name="gender"
            value={input.gender}
            onChange={handleValueChange}
          />
          <br />
          <TextField
            label="이메일"
            variant="standard"
            type="text"
            name="email"
            value={input.email}
            onChange={handleValueChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            추가
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    // <form onSubmit={handleFormSubmit}>
    //   <h1>고객 추가</h1>
    //   <p>
    //     프로필 이미지:
    //     <input
    //       type="file"
    //       name="file"
    //       file={input.file}
    //       value={input.fileName}
    //       onChange={handleFileChange}
    //     />
    //   </p>

    //   <p>
    //     이름:
    //     <input
    //       type="text"
    //       name="userName"
    //       value={input.userName}
    //       onChange={handleValueChange}
    //     />
    //   </p>

    //   <p>
    //     생년월일:
    //     <input
    //       type="text"
    //       name="birthday"
    //       value={input.birthday}
    //       onChange={handleValueChange}
    //     />
    //   </p>

    //   <p>
    //     성별:
    //     <input
    //       type="text"
    //       name="gender"
    //       value={input.gender}
    //       onChange={handleValueChange}
    //     />
    //   </p>

    //   <p>
    //     이메일:
    //     <input
    //       type="text"
    //       name="email"
    //       value={input.email}
    //       onChange={handleValueChange}
    //     />
    //   </p>

    //   <button type="submit">추가하기</button>
    // </form>
  );
};

export default CustomerAdd;
